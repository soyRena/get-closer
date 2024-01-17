'use client'

import { useEffect, useState } from 'react'
import { Libraries, useLoadScript } from '@react-google-maps/api'
import { AddressInformation } from '../../../../shared/types'
import { AddressListHomeAutoCompleteInput } from './address-list-home-auto-complete-input'
import { AddressListGroupAddress } from '../../address-list-group-address/address-list-group-address'
import { AddressListSituationContainer } from './address-list-home-situation-container'
import { clientSideOnly } from '~/helpers/client-side'

const libraries: Libraries = ['places']

export function AddressListHome() {
  const [addressList, setAddressList] = useState<AddressInformation[]>(
    clientSideOnly(() => JSON.parse(window.localStorage.getItem('SAVED_ADDRESS') as string))
  )

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries
  })

  console.log(addressList)

  useEffect(() => {
    clientSideOnly(() => window.localStorage.setItem('SAVED_ADDRESS', JSON.stringify(addressList)))
  }, [addressList])

  return (
    <>
      {isLoaded ? (
        <div className="flex flex-col w-3/5">
          <AddressListSituationContainer addressList={addressList} />
          <AddressListHomeAutoCompleteInput addressList={addressList} setAddressList={setAddressList} />
          <AddressListGroupAddress addressList={addressList} setAddressList={setAddressList} />
        </div>
      ) : (
        <></>
      )}
    </>
  )
}
