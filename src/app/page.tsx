import { AddressSearchInput } from '~/address-search-input/components/address-search-input'
import { NavigationMenu } from '~/navigation-menu/components/navigation-menu'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-64">
          <NavigationMenu />
        </aside>
        <main className="flex-1 p-6">
          <AddressSearchInput />
        </main>
      </div>
    </div>
  )
}
