import { NavigationMenuItem } from './navigation-menu-item'
import { LayoutGrid, Mails, Pin } from 'lucide-react'

const itemsMap = [
  {
    label: 'Dashboard',
    icon: <LayoutGrid fill="#2c2c2c" color="#2c2c2c" size="18" />,
    goTo: '/'
  },
  {
    label: 'Endereços',
    icon: <Pin fill="#2c2c2c" color="#2c2c2c" size="18" />,
    goTo: '/address'
  },
  {
    label: 'Contato',
    icon: <Mails color="#2c2c2c" size="18" />,
    goTo: '#'
  }
]

export function NavigationMenu() {
  return (
    <div className="h-full px-3 py-4 overflow-y-auto bg-zinc-50 space-y-11">
      <nav className="text-4xl font-bold">
        <a href="#" className="flex items-center p-2 text-gray-900 ml-3">
          GetCloser
        </a>
      </nav>

      <nav className="space-y-11 font-medium">
        {itemsMap.map((item, index) => {
          return <NavigationMenuItem label={item.label} icon={item.icon} goTo={item.goTo} key={index} />
        })}
      </nav>
    </div>
  )
}
