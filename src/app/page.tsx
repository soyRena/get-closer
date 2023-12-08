'use client'

import { AddressSearchInput } from '~/components/address-search-input/address-search-input'
import { EmptyAddressState } from '~/components/empty-address-state/empty-address-state'

export default function Home() {
  const registeredAddress = window.localStorage.getItem('SAVED_ADDRESS')

  return <>{Boolean(registeredAddress) ? <AddressSearchInput /> : <EmptyAddressState />}</>
}
