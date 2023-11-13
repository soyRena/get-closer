import Link from 'next/link'

interface NavigationMenuItemProps {
  label: string
  goTo: string
  icon: JSX.Element
}

export function NavigationMenuItem(props: NavigationMenuItemProps) {
  const { goTo, icon, label } = props

  return (
    <li>
      <Link href={goTo} className="flex items-center p-5 text-gray-900 rounded-lg hover:bg-gray-100 group">
        {icon}
        <span className="flex-1 ml-3 whitespace-nowrap">{label}</span>
      </Link>
    </li>
  )
}
