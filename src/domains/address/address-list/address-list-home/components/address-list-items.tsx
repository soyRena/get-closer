import { Trash2 } from 'lucide-react'
import { AddressInformation } from '../../shared/types'

interface AddressListItemsProps {
  addressInformation: AddressInformation
  addressList: AddressInformation[]
  setAddressList: (value: AddressInformation[]) => void
}

export function AddressListItems(props: AddressListItemsProps) {
  const { addressInformation, addressList, setAddressList } = props

  function deleteAddress() {
    const newAddressList = addressList.filter(address => address !== addressInformation)

    setAddressList(newAddressList)
  }

  return (
    <div className="bg-white p-4 rounded-lg flex items-center justify-between">
      <p className="text-neutral-900">{addressInformation.description}</p>
      <div className="rounded-lg hover:bg-neutral-400 p-2 hover:cursor-pointer" onClick={deleteAddress}>
        <Trash2 size={18} />
      </div>
    </div>
  )
}
