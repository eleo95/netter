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

export function createSubnetFromIp(ip: string, mask?: string | number) {
  try {
    const net = new Netmask(ip, mask)
    return net
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
}
