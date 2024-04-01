import { AddressInformation, WayPoints } from '~/domains/shared/types'

export class WayPoint {
  public waypoint: WayPoints

  constructor(rawAddress: AddressInformation) {
    this.waypoint = {
      waypoint: {
        location: {
          latLng: {
            latitude: rawAddress.lat,
            longitude: rawAddress.lng
          }
        }
      }
    }
  }
}
