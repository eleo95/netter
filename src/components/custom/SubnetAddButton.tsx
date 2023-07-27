import { PlusCircleIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { useSubnetStore } from '@/store/useSubnetStore'

export default function SubnetAddButton() {
  const { addHostRequirements } = useSubnetStore()
  return (
    <Button
      onClick={addHostRequirements}
      className="transition active:scale-95 "
    >
      <PlusCircleIcon className="mr-2 h-auto w-5" />
      Add subnet
    </Button>
  )
}
