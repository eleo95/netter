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
import HashTagIcon from '@/components/icons/hashtagIcon'

interface Requirement {
  name: string
  hosts: number
  id: string
}

const lista: Array<Requirement> = [
  {
    name: 'Oficina',
    hosts: 5,
    id: 'a03jd03jd0302'
  }
  // {
  //   name: 'Sala',
  //   hosts: 10,
  //   id: 'a03adjdadd03jd0302'
  // },
  // {
  //   name: 'Frente',
  //   hosts: 15,
  //   id: 'a03jd0aa11113jd0302'
  // },
  // {
  //   name: 'Patio',
  //   hosts: 10,
  //   id: 'a03sssssadjdadd03jd0302'
  // }
]

function App() {
  return (
    <div className="relative m-8 overflow-hidden bg-white">
      <div className="h-full sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="mb-4 flex items-center gap-2 ">
          <HashTagIcon className="h-6 w-6 text-sm" fill="#000" />
          <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            Netter
          </h1>
        </div>

        <div className="mx-auto mb-14 flex w-80 gap-x-4">
          <Input type="text" placeholder="Network IP Address" />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Mask" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Mask</SelectLabel>
                {Array(8)
                  .fill(24)
                  .map((n, i) => n + i)
                  .map((mask) => (
                    <SelectItem key={mask} value={mask}>
                      /{mask}
                    </SelectItem>
                  ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            Subnets
          </h1>
          {lista.length > 0 && <Button>+ Add subnet</Button>}
        </div>
        {lista.length > 0 ? (
          <>
            <Card className="max-h-96 overflow-y-scroll">
              <CardContent>
                {lista.map((e) => {
                  return (
                    <div
                      key={e.id}
                      className="flex w-full max-w-sm grid-cols-2 items-center gap-2 pt-4"
                    >
                      <div className="flex w-full flex-col gap-y-2 ">
                        <Label htmlFor="name">Subnet</Label>
                        <Input
                          type="text"
                          id="name"
                          placeholder="Room"
                          value={e.name}
                          onChange={() => {}}
                        />
                      </div>
                      <div className="flex w-16 flex-col gap-y-2">
                        <Label htmlFor="hosts">Hosts</Label>
                        <Input
                          type="number"
                          id="hosts"
                          placeholder="0"
                          value={e.hosts}
                          onChange={() => {}}
                        />
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>
            <Button className="mt-4 w-full">Continue</Button>
          </>
        ) : (
          <div className="flex w-full flex-col items-center gap-y-2 pt-4">
            <HashTagIcon className="mb-1 h-6 w-6 text-sm" fill="#919191" />
            <p className="text-gray-600">Create your required Subnets here!</p>
            <Button>+ Add subnet</Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
