'use client'

import { clientSideOnly } from '~/helpers/client-side'
import { DashboardHomeViewEmptyAddressList } from './dashboard-home-view-empty-state'
import { DashboardHomeSearchAddressInput } from '../../dashboard-home-search-address/components/dashboard-home-search-address-input'
import { AddressInformation } from '~/domains/shared/types'
import { useState } from 'react'
import { DashboardHomeAddressInformation } from './dashboard-home-address-information'
import { Libraries, useLoadScript } from '@react-google-maps/api'

const libraries: Libraries = ['places']

export function DashboardHomeView() {
  const [searchAddress, setSearchAddress] = useState<AddressInformation>()

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries
  })

  const registeredAddress: AddressInformation[] = clientSideOnly(() =>
    JSON.parse(window.localStorage.getItem('SAVED_ADDRESS') as string)
  )

  return (
    <>
      {registeredAddress && registeredAddress?.length !== 0 && isLoaded ? (
        <>
          <DashboardHomeSearchAddressInput setSearchAddress={setSearchAddress} />
          <DashboardHomeAddressInformation address={searchAddress} />
        </>
      ) : (
        <DashboardHomeViewEmptyAddressList />
      )}
    </>
  )
}
