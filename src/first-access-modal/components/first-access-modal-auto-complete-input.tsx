import { Combobox } from '@headlessui/react'
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete'
import { AddressInformation } from '../types'

interface FirstAccessModalFormProps {
  addressList: AddressInformation[]
  setAddressList: (value: AddressInformation[]) => void
}

export function FirstAccessModalAutoCompleteInput(props: FirstAccessModalFormProps) {
  const { addressList, setAddressList } = props

  const {
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions
  } = usePlacesAutocomplete()

  async function onPlaceChange(address: string) {
    setValue(address, false)
    clearSuggestions()

    const results = await getGeocode({ address })
    const { lat, lng } = getLatLng(results[0])

    setAddressList([...addressList, { description: address, lat, lng }])
    setValue('', false)
  }

  return (
    <div className="top-16 my-6">
      <Combobox onChange={onPlaceChange}>
        <div className="mt-1">
          <div className="w-full cursor-default overflow-hidden rounded-lg rounded-s-gray-100 bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              onChange={event => setValue(event.target.value)}
              value={value}
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              placeholder="Ex: Rua Maria da Silva, 123"
            />

            <Combobox.Options className="mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {data.length === 0 || status !== 'OK' ? (
                <div className="cursor-default select-none  text-gray-700">Nothing found.</div>
              ) : (
                data.map(({ place_id, description }) => (
                  <Combobox.Option
                    key={place_id}
                    value={description}
                    className={({ active }) =>
                      `cursor-default select-none px-4 py-2 pr-4 ${active ? 'bg-zinc-600 text-white' : 'text-gray-900'}`
                    }
                  >
                    {({ selected }) => (
                      <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                        {description}
                      </span>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </div>
        </div>
      </Combobox>
    </div>
  )
}
