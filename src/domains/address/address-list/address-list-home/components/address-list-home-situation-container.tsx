import { AddressInformation } from '../../../../shared/types'

interface AddressListUnregisteredAddressStateProps {
  addressList: AddressInformation[]
}

export function AddressListSituationContainer(props: AddressListUnregisteredAddressStateProps) {
  const { addressList } = props

  const hasRegisteredAddress = addressList.length !== 0
  return (
    <div className="bg-white rounded-2xl box-border p-8 flex flex-col gap-8">
      <h1 className="text-2xl font-bold text-neutral-900">
        {hasRegisteredAddress
          ? 'Gerencie sua lista de endereços cadastrados'
          : 'Você ainda não tem endereços cadastrados'}
      </h1>
      <div className="flex flex-col gap-4">
        {hasRegisteredAddress ? (
          <>
            <p className="text-sm  text-neutral-700">
              Abaixo você pode visualizar, excluir e adicionar novos endereços à sua lista conforme necessário.
            </p>
            <p className="text-sm  text-neutral-700">
              Seus endereços serão salvos automaticamente assim que você os selecionar na barra de texto. O mesmo
              acontece com a exclusão automática ao clicar no ícone de lixeira ao lado do endereço.
            </p>
          </>
        ) : (
          <>
            <p className="text-sm  text-neutral-700">
              Não encontramos nenhuma lista de endereços registrados em seu acesso. É necessário realizar o cadastro de
              1 ou mais endereços para que você possa realizar uma busca seguida de uma comparação de distância!
            </p>
            <p className="text-sm text-neutral-700">
              Para continuar usando a plataforma, por favor, adicione um endereço ou mais.
            </p>
            <p className="text-sm text-neutral-700">
              Quando finalizar de cadastrar seus endereços clique no botão de salvar ao final do card.
            </p>
          </>
        )}
      </div>
    </div>
  )
}
