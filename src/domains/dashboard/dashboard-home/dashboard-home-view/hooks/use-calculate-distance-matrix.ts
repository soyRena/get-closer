'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { AddressInformation, DistanceMatrix, TravelMode } from '~/domains/shared/types'

interface CalculateDistanceMatrixProps extends DistanceMatrix {
  address?: AddressInformation
}

interface CalculateDistanceMatrixResponse {
  destinationIndex: number
  distanceMeters: number
  condition: string
  duration: number
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
        'X-Goog-FieldMask': 'destinationIndex,distanceMeters,condition,duration'
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
  const { data: rawData, ...restQuery } = useQuery<CalculateDistanceMatrixResponse[]>({
    queryKey: ['useCalculateDistanceMatrix', origins, destinations, travelMode],
    queryFn: () => fetchCalculateDistanceMatrix({ origins, destinations, travelMode }),
    enabled: Boolean(address)
  })

  const sortDistanceByAscending = rawData?.sort((a, b) => {
    return a.distanceMeters - b.distanceMeters
  }) || []

  const getNearestAddress = sortDistanceByAscending[0]

  return { data: getNearestAddress, ...restQuery }
}
