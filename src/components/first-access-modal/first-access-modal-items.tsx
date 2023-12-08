import { AddressInformation } from '../../types/address-information'

export function FirstAccessModalItems({ addressInformation }: { addressInformation: AddressInformation }) {
  return <p>{addressInformation.description}</p>
}
