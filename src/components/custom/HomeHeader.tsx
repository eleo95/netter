import { HashTagIcon } from '@/components/icons'

export default function HomeHeader() {
  return (
    <div className="my-8 flex items-center gap-2 ">
      <HashTagIcon className="h-6 w-6 text-sm" fill="#000" />
      <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white ">
        Netter
      </h1>
    </div>
  )
}
