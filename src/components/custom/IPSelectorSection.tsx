import { Label } from '@/components/ui/label'
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
import { useSubnetStore } from '@/store/useSubnetStore'
import { useState } from 'react'
import { IsAValidIp, createSubnetFromIp } from '@/services/subnetCalc'

export default function IPSelectorSection() {
  const { ip, setIp, mask, setMask, setnetworkInfo } = useSubnetStore()

  const [ipError, setIpError] = useState('')

  function handleOnChangeIP(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target

    try {
      setnetworkInfo(createSubnetFromIp(value, mask))
    } catch (error) {
      setnetworkInfo()
    } finally {
      setIpError('')
    }
    return setIp(value)
  }
  function handleOnChangeMask(value: string) {
    if (!IsAValidIp(ip)) {
      try {
        setnetworkInfo()
      } catch (error) {
        setIpError('' + error)
      }
    } else {
      setIpError('')
      setnetworkInfo(createSubnetFromIp(ip, value))
    }
    if (value) return setMask(value)
  }
  return (
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
        <Select onValueChange={handleOnChangeMask} defaultValue={mask ?? '24'}>
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
  )
}
