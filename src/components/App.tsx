import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { useSubnetStore } from '@/store/useSubnetStore'
import { IsAValidIp, createSubnetFromIp } from '@/services/subnetCalc'
import { useState } from 'react'
import { HashTagIcon } from '@/components/icons'
import { PlusCircleIcon, Trash2Icon as TrashIcon } from 'lucide-react'

function App() {
  const {
    ip,
    setIp,
    mask,
    setMask,
    addHostRequirements,
    removeHostRequirement,
    hostRequirements,
    updateHostRequirement,
    setnetworkInfo
  } = useSubnetStore((state) => state)
  const [ipError, setIpError] = useState('')

  function handleOnChangeIP(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target

    // console.log("ip",value+"/"+mask)
    // if (!IsAValidIp(value + '/' + mask)) {
    //   try {
    //     setnetworkInfo()
    //   } catch (error) {
    //     setIpError(""+error)
    //   }
    // } else {
    //   setIpError('')
    //   setnetworkInfo(createSubnetFromIp(ip))
    // }
    try {
      setnetworkInfo(createSubnetFromIp(value + '/' + mask))
    } catch (error) {
      setnetworkInfo()
    } finally {
      setIpError('')
    }
    return setIp(value)
  }
  function handleOnChangeMask(value: string) {
    if (!IsAValidIp(ip + '/' + value)) {
      try {
        setnetworkInfo()
      } catch (error) {
        setIpError('' + error)
      }
    } else {
      setIpError('')
      setnetworkInfo(createSubnetFromIp(ip))
    }
    if (value) return setMask(value)
  }

  // function handleOnChangeMask(e:React.ChangeEvent<HTMLSelectElement>) {
  //   const {value} = e.target
  //   if (!IsAValidIp(ip + '/' + value)) {
  //     try {
  //       setnetworkInfo()
  //     } catch (error) {
  //       setIpError('' + error)
  //     }
  //   } else {
  //     setIpError('')
  //     setnetworkInfo(createSubnetFromIp(ip))
  //   }
  //   if (value) return setMask(value)
  // }

  function handleOnChangeUpdateRequirements(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const { value, id } = e.target
    // if(!value) return
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
    <div className="relative m-8 overflow-hidden bg-white">
      <div className="h-full sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="mb-4 flex items-center gap-2 ">
          <HashTagIcon className="h-6 w-6 text-sm" fill="#000" />
          <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            Netter
          </h1>
        </div>

        <div className="mx-auto mb-14 flex justify-between gap-x-4 px-2">
          <div className="w-full">
            <Label htmlFor="ip_input">IP Address</Label>
            <Input
              id="ip_input"
              type="text"
              placeholder="Network IP Address"
              onChange={handleOnChangeIP}
              value={ip}
              className={ipError && 'border-2 border-destructive'}
            />
            {ipError && (
              <span className="text-xs font-semibold text-destructive">
                {ipError}
              </span>
            )}
          </div>
          <div className="w-48">
            <Label htmlFor="ip_input">Slash Mask</Label>
            <Select onValueChange={handleOnChangeMask} defaultValue="24">
              <SelectTrigger>
                <SelectValue placeholder="Mask" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Mask</SelectLabel>
                  {Array(8)
                    .fill(24)
                    .map((n, i) => n + i + '')
                    .map((mask) => (
                      <SelectItem key={mask} value={mask}>
                        /{mask}
                      </SelectItem>
                    ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mb-8 flex items-center justify-between ">
          <h1 className="text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            Subnets
          </h1>
          {hostRequirements.length > 0 && (
            <Button
              onClick={addHostRequirements}
              className="transition active:scale-95 "
            >
              <PlusCircleIcon className="mr-2 h-auto w-5" />
              Add subnet
            </Button>
          )}
        </div>
        {hostRequirements.length > 0 ? (
          <>
            <Card className="max-h-96 overflow-y-scroll">
              <CardContent>
                {hostRequirements.map(({ id, name, hosts }) => {
                  return (
                    <div
                      key={id}
                      className="flex w-full max-w-sm grid-cols-2 items-center gap-2 pt-4"
                    >
                      <div className="flex w-full flex-col gap-y-2 ">
                        <Label htmlFor={id + '_name'}>Subnet</Label>
                        <Input
                          type="text"
                          id={id + '_name'}
                          placeholder="Room"
                          value={name}
                          onChange={handleOnChangeUpdateRequirements}
                        />
                      </div>
                      <div className="flex max-w-fit flex-col gap-y-2">
                        <Label htmlFor={id + '_hosts'}>Hosts</Label>
                        <Input
                          type="number"
                          id={id + '_hosts'}
                          placeholder="0"
                          name="hosts"
                          value={hosts}
                          min={'1'}
                          required
                          onChange={handleOnChangeUpdateRequirements}
                          onKeyDownCapture={(event) =>
                            (event.code != '8' && event.code == '0') ||
                            (event.code >= '48' && event.code <= '57')
                          }
                        />
                      </div>
                      <Button
                        className="group self-end transition active:scale-95 "
                        variant={'destructive'}
                        onClick={() => removeHostRequirement(id)}
                      >
                        <TrashIcon className="h-5 w-5 group-hover:animate-jump-shake" />
                      </Button>
                    </div>
                  )
                })}
              </CardContent>
            </Card>
            <div className="mt-4">
              <Button
                disabled={nextStepDisabled()}
                className="w-full transition active:scale-95"
              >
                Continue
              </Button>
            </div>
          </>
        ) : (
          <div className="flex w-full flex-col items-center gap-y-2 pt-4">
            <HashTagIcon className="mb-1 h-6 w-6 text-sm" fill="#919191" />
            <p className="text-gray-600">Create your required Subnets here!</p>
            <Button onClick={addHostRequirements}>
              <PlusCircleIcon className="mr-2 h-auto w-5" />
              Add subnet
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
