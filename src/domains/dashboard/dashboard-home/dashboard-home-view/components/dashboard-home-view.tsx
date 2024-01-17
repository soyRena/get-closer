'use-client'

import { clientSideOnly } from '~/helpers/client-side'
import { DashboardHomeViewEmptyAddressList } from './dashboard-home-view-empty-state'
import { DashboardHomeSearchAddressInput } from '../../dashboard-home-search-address/components/dashboard-home-search-address-input'

export function DashboardHomeView() {
  const registeredAddress = clientSideOnly(() => window.localStorage.getItem('SAVED_ADDRESS'))

  return (
    <>
      {Boolean(registeredAddress) ? (
        <>
          <DashboardHomeSearchAddressInput />
        </>
      ) : (
        <DashboardHomeViewEmptyAddressList />
      )}
    </>
  )
}
