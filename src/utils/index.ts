import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

export const blockSizeToMasks: Record<number, string> = {
  2: '31',
  4: '30',
  8: '29',
  16: '28',
  32: '27',
  64: '26',
  128: '25',
  256: '24'
}

export function calculateMaskByBlockSize(reqs: Requirement[]) {
  return reqs
    .sort((a, b) => +b.hosts - +a.hosts)
    .map((req) => {
      const block = Math.pow(
        2,
        Math.ceil(Math.log(+req.hosts + 8) / Math.log(2))
      )

      return {
        ...req,
        mask: blockSizeToMasks[block]
      }
    })
}
