import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from '@headlessui/react'
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete'
import { AddressInformation } from '~/domains/shared/types'

import { IoMdSearch } from 'react-icons/io'

interface DashboardHomeSearchAddressInputProps {
  setSearchAddress: (value: AddressInformation) => void
}

export function DashboardHomeSearchAddressInput(props: DashboardHomeSearchAddressInputProps) {
  const { setSearchAddress } = props

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

    setSearchAddress({ description: address, lat, lng })
    setValue('', false)
  }

  return (
    <div className="mx-auto w-200 pt-10">
      <Combobox value={value} onChange={onPlaceChange}>
        <div className="relative">
          <ComboboxInput
            className="w-full rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            value={value}
            onChange={event => setValue(event.target.value)}
          />
          <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
            <IoMdSearch className="size-4 fill-white/60 group-data-[hover]:fill-white" />
          </ComboboxButton>
        </div>
        <Transition leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          <ComboboxOptions
            anchor="bottom"
            className="w-[var(--input-width)] rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] empty:hidden"
          >
            {data.map(({ place_id, description }) => (
              <ComboboxOption
                key={place_id}
                value={description}
                className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
              >
                <div className="text-sm/6 text-white">{description}</div>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </Transition>
      </Combobox>
    </div>
  )
}
