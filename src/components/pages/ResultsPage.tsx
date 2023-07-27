import { useSubnetStore } from '@/store/useSubnetStore'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { calculateMaskByBlockSize } from '@/utils'
import { createSubnetFromIp } from '@/services/subnetCalc'
import { Button } from '@/components/ui/button'
import { ArrowLeftIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import NetworkInfoCard from '@/components/custom/NetworkInfoCard'
import SubnetAccordion from '@/components/custom/SubnetAccordion'

export default function ResultsPage() {
  const { networkInfo, hostRequirements } = useSubnetStore()

  if (!networkInfo) return <div></div>

  let nextNetwork = createSubnetFromIp(networkInfo.base, networkInfo.bitmask)

  const totalRequiredHosts = hostRequirements.reduce(
    (acc, item) => +item.hosts + acc,
    0
  )

  const subnets = calculateMaskByBlockSize(hostRequirements).map((req) => {
    const subnet = createSubnetFromIp(nextNetwork?.base ?? '', req.mask)
    nextNetwork = subnet?.next()
    return {
      ...req,
      ...subnet
    } as NetworkInfo & Requirement
  })

  return (
    <div className="relative m-6 flex flex-col gap-6 md:flex-row ">
      <div className="flex w-full flex-col gap-y-4 md:w-1/3">
        <Link to="/">
          <Button className="transition active:scale-95 ">
            <ArrowLeftIcon /> Back
          </Button>
        </Link>

        <NetworkInfoCard
          networkInfo={networkInfo}
          totalRequiredHosts={totalRequiredHosts}
        />
      </div>

      <Card className="flex-1">
        <CardHeader>
          <>
            <CardTitle>Subnets</CardTitle>
            <CardDescription>Detailed Subnet Information</CardDescription>
          </>
        </CardHeader>
        <CardContent>
          <SubnetAccordion subnets={subnets} />
        </CardContent>
      </Card>
    </div>
  )
}
