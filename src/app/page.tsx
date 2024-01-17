'use client'

import { AddressSearchInput } from '~/components/address-search-input/address-search-input'
import { EmptyAddressState } from '~/components/empty-address-state/empty-address-state'
import { clientSideOnly } from '~/helpers/client-side'

export default function Home() {
  const registeredAddress = clientSideOnly(() => window.localStorage.getItem('SAVED_ADDRESS'))

  console.log(registeredAddress)

  return <>{Boolean(registeredAddress) ? <AddressSearchInput /> : <EmptyAddressState />}</>
}
