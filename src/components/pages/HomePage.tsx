import HostsCard from '@/components/custom/HostsCard'
import EmptyReqsElement from '@/components/custom/EmptyReqsElement'
import SubnetAddButton from '@/components/custom/SubnetAddButton'
import IPSelectorSection from '@/components/custom/IPSelectorSection'
import HomeHeader from '@/components/custom/HomeHeader'
import { useSubnetStore } from '@/store/useSubnetStore'
import { IsAValidIp } from '@/services/subnetCalc'

export default function HomePage() {
  const { ip, removeHostRequirement, hostRequirements, updateHostRequirement } =
    useSubnetStore()

  function handleOnChangeUpdateRequirements(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const { value, id } = e.target

    const [reqId, name] = id.split('_')

    const updatedHostReq: Partial<Requirement> = {
      [name]: value
    }
    updateHostRequirement(reqId, updatedHostReq)
  }

  function nextStepDisabled() {
    return (
      hostRequirements.some((e) => '' + e.hosts === '' || e.name === '') ||
      !IsAValidIp(ip)
    )
  }

  return (
    <div className="relative mx-8 h-screen overflow-hidden bg-white md:flex">
      <div className="h-screen">
        <HomeHeader />

        <IPSelectorSection />

        <div className="mb-8 flex items-center justify-between ">
          <h1 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
            Subnets
          </h1>
          {hostRequirements.length > 0 && <SubnetAddButton />}
        </div>

        {hostRequirements.length > 0 ? (
          <HostsCard
            hostReqs={hostRequirements}
            onChangeUpdateReqs={handleOnChangeUpdateRequirements}
            removeHostsReqs={removeHostRequirement}
            isDisabled={nextStepDisabled()}
          />
        ) : (
          <EmptyReqsElement />
        )}
      </div>
    </div>
  )
}
