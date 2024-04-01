'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { AddressInformation, DistanceMatrix, TravelMode } from '~/domains/shared/types'

interface CalculateDistanceMatrixProps extends DistanceMatrix {
  address?: AddressInformation
}
export async function fetchCalculateDistanceMatrix({ origins, destinations, travelMode }: DistanceMatrix) {
  const response = await axios.post(
    `https://routes.googleapis.com/distanceMatrix/v2:computeRouteMatrix`,
    {
      origins,
      destinations,
      travelMode
    },
    {
      headers: {
        'X-Goog-Api-Key': process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        'X-Goog-FieldMask': 'originIndex,destinationIndex,duration,distanceMeters,status,condition'
      }
    }
  )

  return response.data
}

export function useCalculateDistanceMatrix({
  origins,
  destinations,
  travelMode = TravelMode.driving,
  address
}: CalculateDistanceMatrixProps) {
  const { data, ...restQuery } = useQuery({
    queryKey: ['useCalculateDistanceMatrix', origins, destinations, travelMode],
    queryFn: () => fetchCalculateDistanceMatrix({ origins, destinations, travelMode }),
    enabled: Boolean(address)
  })

  return { data, ...restQuery }
}
