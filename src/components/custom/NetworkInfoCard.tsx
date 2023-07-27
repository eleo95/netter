import { useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../ui/card'
import { Progress } from '../ui/progress'

interface Props {
  networkInfo: NetworkInfo
  totalRequiredHosts: number
}

export default function NetworkInfoCard({
  networkInfo,
  totalRequiredHosts
}: Props) {
  const [progress, setProgress] = useState(0)

  const networkPercent = networkInfo?.size
    ? (totalRequiredHosts / (networkInfo?.size - 2)) * 100
    : 0

  useEffect(() => {
    const timer = setTimeout(() => setProgress(networkPercent), 300)
    return () => clearTimeout(timer)
  }, [networkPercent])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Network Information</CardTitle>
        <CardDescription>Current network details</CardDescription>
      </CardHeader>
      <CardContent>
        <main className="flex flex-col gap-4">
          <div className="flex justify-between">
            <div>Network Address</div>
            <div>
              {networkInfo?.base}/{networkInfo.bitmask}
            </div>
          </div>
          <div className="flex justify-between">
            <div>Maximum Number of IP Addresses</div>
            <div>{networkInfo?.size - 2}</div>
          </div>
          <div className="flex justify-between">
            <div>Amount IP Addresses Needed</div>
            <div>{totalRequiredHosts}</div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <div>Allocated IP Addresses</div>
              <div>
                {totalRequiredHosts}/{networkInfo?.size - 2}
              </div>
            </div>
            {/* <Progress value={(totalRequiredHosts/(networkInfo?.size - 2))*100}/> */}
            <Progress value={progress} className='transition'/>
          </div>
        </main>
      </CardContent>
    </Card>
  )
}
