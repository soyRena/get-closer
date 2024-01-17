'use client'

import { useState } from 'react'
import { Libraries, useLoadScript } from '@react-google-maps/api'
import { AddressInformation } from '../../shared/types'
import { AddressListItems } from './address-list-items'
import { AddressListAutoCompleteInput } from './address-list-auto-complete-input'
import { AddressListEmptyState } from '../../address-list-unregistered-address/components/address-list-empty-state'

const libraries: Libraries = ['places']

export function AddressListHome() {
  const [addressList, setAddressList] = useState<AddressInformation[]>([])

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries
  })

  return (
    <>
      {isLoaded ? (
        <div className="flex flex-col w-3/5">
          <AddressListEmptyState addressList={addressList} />
          <AddressListAutoCompleteInput addressList={addressList} setAddressList={setAddressList} />

          <div className="flex flex-col gap-4">
            {addressList.map(address => {
              return (
                <AddressListItems
                  key={address.description}
                  addressInformation={address}
                  setAddressList={setAddressList}
                  addressList={addressList}
                />
              )
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}
