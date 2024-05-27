'use client'

import { AddressInformation, TravelMode, WayPoints } from '~/domains/shared/types'
import { useCalculateDistanceMatrix } from '../hooks/use-calculate-distance-matrix'
import { clientSideOnly } from '~/helpers/client-side'
import { WayPoint } from '../helpers/waypoints'
import { GoogleMap } from '@react-google-maps/api'

export function DashboardHomeAddressInformation({ address }: { address?: AddressInformation }) {
  const getRegisteredAddress: AddressInformation[] = clientSideOnly(() =>
    JSON.parse(window.localStorage.getItem('SAVED_ADDRESS') as string)
  )

  const destinationsWaypoints = getRegisteredAddress?.map(address => {
    return new WayPoint(address).waypoint
  })

  const originWaypoints = address && [new WayPoint(address).waypoint]

  const { data, isSuccess } = useCalculateDistanceMatrix({
    origins: originWaypoints as WayPoints[],
    destinations: destinationsWaypoints,
    address,
    travelMode: TravelMode.driving
  })

  const getNearestAddress = getRegisteredAddress[data?.destinationIndex]

  console.log(data)

  return (
    <>
      {isSuccess ? (
        <>
          <div className="bg-white rounded-2xl box-border w-3/5 p-8 flex flex-col gap-8">
            {getNearestAddress.description}
            <GoogleMap center={{ lat: getNearestAddress.lat, lng: getNearestAddress.lng }} zoom={9}></GoogleMap>
          </div>
          <div className="flex gap-8">
            <div className="bg-white rounded-2xl box-border w-3/5 p-8">{data.distanceMeters}</div>
            <div className="bg-white rounded-2xl box-border w-3/5 p-8 flex gap-8">{data.duration}</div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  )
}
