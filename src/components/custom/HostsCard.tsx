import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { TrashIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

interface Props {
  hostReqs: Requirement[]
  onChangeUpdateReqs: (e: React.ChangeEvent<HTMLInputElement>) => void
  removeHostsReqs: (id: string) => void
  isDisabled: boolean
}

export default function HostCard({
  hostReqs,
  removeHostsReqs,
  onChangeUpdateReqs,
  isDisabled
}: Props) {
  return (
    <div className="flex flex-col gap-y-4">
      <Card className="max-h-96 overflow-y-scroll">
        <CardContent>
          {hostReqs.map(({ id, name, hosts }) => {
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
                    onChange={onChangeUpdateReqs}
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
                    onChange={onChangeUpdateReqs}
                    onKeyDownCapture={(event) =>
                      (event.code != '8' && event.code == '0') ||
                      (event.code >= '48' && event.code <= '57')
                    }
                  />
                </div>
                <Button
                  className="group self-end transition active:scale-95 "
                  variant={'destructive'}
                  onClick={() => removeHostsReqs(id)}
                >
                  <TrashIcon className="h-5 w-5 group-hover:animate-jump-shake" />
                </Button>
              </div>
            )
          })}
        </CardContent>
      </Card>
      <Link to="/results">
        <Button
          disabled={isDisabled}
          className="w-full transition active:scale-95"
        >
          Continue
        </Button>
      </Link>
    </div>
  )
}
