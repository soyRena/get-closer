'use client'

import { clientSideOnly } from '~/helpers/client-side'
import { DashboardHomeViewEmptyAddressList } from './dashboard-home-view-empty-state'
import { DashboardHomeSearchAddressInput } from '../../dashboard-home-search-address/components/dashboard-home-search-address-input'
import { AddressInformation } from '~/domains/shared/types'
import { useState } from 'react'

export function DashboardHomeView() {
  const [searchAddress, setSearchAddress] = useState<AddressInformation>()

  const registeredAddress: AddressInformation[] = clientSideOnly(() =>
    JSON.parse(window.localStorage.getItem('SAVED_ADDRESS') as string)
  )

  return (
    <>
      {registeredAddress.length !== 0 ? (
        <>
          <DashboardHomeSearchAddressInput setSearchAddress={setSearchAddress} />
        </>
      ) : (
        <DashboardHomeViewEmptyAddressList />
      )}
    </>
  )
}
