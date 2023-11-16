import { useState } from 'react'
import { FirstAccessModalItems } from './first-access-modal-items'
import { LoadScript } from '@react-google-maps/api'
import { AddressInformation } from '../types'
import { FirstAccessModalAutoCompleteInput } from './first-access-modal-auto-complete-input'
import { useRouter } from 'next/navigation'

const loadScriptLibraries: any = ['places']

export function FirstAccessModal() {
  const [addressList, setAddressList] = useState<AddressInformation[]>([])
  const { refresh } = useRouter()

  function saveAddressList() {
    window.localStorage.setItem('SAVED_ADDRESS', JSON.stringify(addressList))
    refresh()
  }

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
      libraries={loadScriptLibraries}
    >
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-2xl font-semibold">Faça um novo cadastro!</h3>
            </div>
            <div className="relative p-6 flex-auto text-center">
              <p className="text-blueGray-500 text-lg leading-relaxed">Parece que você não possui endereços salvos.</p>
              <p className="text-blueGray-500 text-lg leading-relaxed">
                Para continuar usando a plataforma, por favor, adicione pelo menos dois endereços.
              </p>

              <FirstAccessModalAutoCompleteInput addressList={addressList} setAddressList={setAddressList} />

              {addressList.map(address => {
                return <FirstAccessModalItems key={address.description} addressInformation={address} />
              })}
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                onClick={saveAddressList}
                disabled={addressList.length < 2}
                className="enabled:text-white border enabled:border-gray-800 enabled:bg-gray-900 
                enabled:focus:ring-4 enabled:focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 
                text-center me-2 mb-2 disabled:border-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </LoadScript>
  )
}
