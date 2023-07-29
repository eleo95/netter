import { Netmask } from 'netmask'
// interface SubnetCalcService {
//   IsValid: (ip: string) => boolean
//   // createIP: (ip: string) => Netmask
// }

export function IsAValidIp(ip: string) {
  let result
  try {
    result = createSubnetFromIp(ip)
  } catch (error) {
    result = false
  }
  return !!result
}

export function createSubnetFromIp(ip: string, mask?: string | number) {
  try {
    return new Netmask(ip, mask)
  } catch (error) {
    if (error instanceof Error) {
      throw error
    }
  }
}
