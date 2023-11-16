import { AddressInformation } from '../types'

export function FirstAccessModalItems({ addressInformation }: { addressInformation: AddressInformation }) {
  return <p>{addressInformation.description}</p>
}
