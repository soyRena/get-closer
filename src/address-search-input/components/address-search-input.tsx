import { Search } from 'lucide-react'

export function AddressSearchInput() {
  return (
    <div className="flex flex-col items-center">
      <form>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search size={18} />
          </div>
          <input
            type="search"
            id="search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-white rounded-full focus:ring-blue-500 focus:border-blue-500"
            placeholder="Faça uma nova pesquisa"
            required
          />
        </div>
      </form>
    </div>
  )
}
