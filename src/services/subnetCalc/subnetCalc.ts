import { Netmask } from 'netmask'
// interface SubnetCalcService {
//   IsValid: (ip: string) => boolean
//   // createIP: (ip: string) => Netmask
// }

export function IsAValidIp(ip: string) {
  let result
  try {
    result = createSubnetFromIp(ip)
    // console.log(result)
  } catch (error) {
    result = false
    // console.log(error)
  }
  return !!result
}

export function createSubnetFromIp(ip: string) {
  try {
    return new Netmask(ip)
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
}
