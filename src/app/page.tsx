import { AddressSearchInput } from '~/components/address-search-input/address-search-input'
import { EmptyAddressState } from '~/components/empty-address-state/empty-address-state'

export default function Home() {
  return (
    <>
      <AddressSearchInput />
      <EmptyAddressState />
    </>
  )
}
