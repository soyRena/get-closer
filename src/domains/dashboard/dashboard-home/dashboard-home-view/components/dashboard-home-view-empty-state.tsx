import { ArrowRightCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function DashboardHomeViewEmptyAddressList() {
  const { push } = useRouter()

  return (
    <div className="bg-white rounded-2xl box-border w-3/5 p-8 flex flex-col gap-8">
      <h1 className="text-2xl font-bold text-neutral-900">Você ainda não tem endereços cadastrados</h1>
      <div className="flex flex-col gap-4">
        <p className="text-sm  text-neutral-700">
          Não encontramos nenhuma lista de endereços registrados em seu acesso. É necessário realizar o cadastro de 1 ou
          mais endereços para que você possa realizar uma busca seguida de uma comparação de distância!
        </p>
        <p className="text-sm text-neutral-700">
          Clique no botão ao fim do card para iniciar o registro de uma nova lista de endereços.
        </p>
      </div>
      <div className="flex flex-row-reverse w-full right-0">
        <button
          onClick={() => push('/address')}
          className="text-sm text-center text-white font-medium flex items-center gap-2 bg-neutral-900 w-max rounded-full px-2 py-2 hover:bg-neutral-200"
        >
          Cadastre seus endereços
          <ArrowRightCircle strokeWidth={1.5} />
        </button>
      </div>
    </div>
  )
}
