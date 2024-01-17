import { AddressInformation } from '../../../shared/types'
import { AddressListGroupAddressItems } from './address-list-group-address-items'

interface AddressListGroupAddressProps {
  addressList: AddressInformation[]
  setAddressList: (value: AddressInformation[]) => void
}

export function AddressListGroupAddress(props: AddressListGroupAddressProps) {
  const { addressList, setAddressList } = props

  return (
    <div className="flex flex-col gap-4">
      {addressList.map(address => {
        return (
          <AddressListGroupAddressItems
            key={address.description}
            addressInformation={address}
            setAddressList={setAddressList}
            addressList={addressList}
          />
        )
      })}
    </div>
  )
}
