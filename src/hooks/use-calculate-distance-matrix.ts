'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

interface CalculateDistanceMatrixProps {
  origins: string
  destinations: string
  travelMode: string
}

interface CalculateDistanceMatrixResponse<T> {
  resourceSets: T[]
}

export async function fetchCalculateDistanceMatrix({
  origins,
  destinations,
  travelMode
}: CalculateDistanceMatrixProps) {
  const apiKey = process.env.NEXT_PUBLIC_BING_MAP_API_KEY

  const response = await axios.get(
    `https://dev.virtualearth.net/REST/v1/Routes/DistanceMatrixAsync?origins=${origins}&destinations=${destinations}&travelMode=${travelMode}&key=${apiKey}`
  )

  return response.data
}

export function useCalculateDistanceMatrix({ origins, destinations, travelMode }: CalculateDistanceMatrixProps) {
  const { data, ...restQuery } = useQuery({
    queryKey: ['useCalculateDistanceMatrix', origins, destinations, travelMode],
    queryFn: () => fetchCalculateDistanceMatrix({ origins, destinations, travelMode })
  })

  return { data, ...restQuery }
}
