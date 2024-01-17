import { SaveAll } from 'lucide-react'
import { AddressInformation } from '../../shared/types'
import { clientSideOnly } from '~/helpers/client-side'
import { useRouter } from 'next/navigation'

interface AddressListEmptyStateProps {
  addressList: AddressInformation[]
}

export function AddressListEmptyState(props: AddressListEmptyStateProps) {
  const { addressList } = props
  const { refresh } = useRouter()

  function saveAddressList() {
    clientSideOnly(() => window.localStorage.setItem('SAVED_ADDRESS', JSON.stringify(addressList)))
    refresh()
  }

  return (
    <div className="bg-white rounded-2xl box-border p-8 flex flex-col gap-8">
      <h1 className="text-2xl font-bold text-neutral-900">Você ainda não tem endereços cadastrados</h1>
      <div className="flex flex-col gap-4">
        <p className="text-sm  text-neutral-700">
          Não encontramos nenhuma lista de endereços registrados em seu acesso. É necessário realizar o cadastro de 1 ou
          mais endereços para que você possa realizar uma busca seguida de uma comparação de distância!
        </p>
        <p className="text-sm text-neutral-700">
          Para continuar usando a plataforma, por favor, adicione um endereço ou mais.
        </p>
        <p className="text-sm text-neutral-700">
          Quando finalizar de cadastrar seus endereços clique no botão de salvar ao final do card.
        </p>
      </div>
      <div className="flex flex-row-reverse w-full right-0">
        <button
          onClick={saveAddressList}
          disabled={addressList.length === 0}
          className="text-sm text-center text-white font-medium flex items-center gap-2 enabled:text-white enabled:bg-neutral-900 
              enabled:focus:ring-4 enabled:focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 
              text-center disabled:border-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed disabled:border"
        >
          Salvar
          <SaveAll size={18} />
        </button>
      </div>
    </div>
  )
}
