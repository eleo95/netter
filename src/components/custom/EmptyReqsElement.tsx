import { HashTagIcon } from '@/components/icons'
import SubnetAddButton from './SubnetAddButton'

export default function EmptyReqsElement() {
  return (
    <div className="flex w-full flex-col items-center gap-y-2 pt-4">
      <HashTagIcon className="mb-1 h-6 w-6 text-sm" fill="#919191" />
      <p className="text-gray-600">Create your required Subnets here!</p>
      <SubnetAddButton />
    </div>
  )
}
