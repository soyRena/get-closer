export interface AddressInformation {
   description: string
   lat: number
   lng: number
 }
 
 export enum TravelMode {
  driving = 'DRIVE',
  bicycle = 'BICYCLE',
  walk = 'WALK',
  motorcycle = 'TWO_WHEELER',
  bus = 'TRANSIT'
}
export interface WayPoints {
  waypoint: {
    location: {
      latLng: {
        latitude: number
        longitude: number
      }
    }
  }
}

export interface DistanceMatrix {
  origins: WayPoints[]
  destinations: WayPoints[]
  travelMode: TravelMode
}
