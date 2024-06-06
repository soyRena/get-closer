'use client'

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import { DashboardHomeView } from '~/domains/dashboard/dashboard-home/dashboard-home-view/components/dashboard-home-view'


export default function Home() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  })

  if (!isLoaded) {
    return null
  }

  return (
    <>
      <DashboardHomeView />
      <div style={{ width: '100%', height: '100%', borderRadius: '1rem' }}>
        <GoogleMap
          center={{ lat: -3.745, lng: -38.523 }}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '100%', borderRadius: '1rem' }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            keyboardShortcuts: false,

            styles: [
              {
                featureType: 'all',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    saturation: 36
                  },
                  {
                    color: '#000000'
                  },
                  {
                    lightness: 40
                  }
                ]
              },
              {
                featureType: 'all',
                elementType: 'labels.text.stroke',
                stylers: [
                  {
                    visibility: 'on'
                  },
                  {
                    color: '#000000'
                  },
                  {
                    lightness: 16
                  }
                ]
              },
              {
                featureType: 'all',
                elementType: 'labels.icon',
                stylers: [
                  {
                    visibility: 'off'
                  }
                ]
              },
              {
                featureType: 'administrative',
                elementType: 'geometry.fill',
                stylers: [
                  {
                    color: '#000000'
                  },
                  {
                    lightness: 20
                  }
                ]
              },
              {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [
                  {
                    color: '#000000'
                  },
                  {
                    lightness: 17
                  },
                  {
                    weight: 1.2
                  }
                ]
              },
              {
                featureType: 'landscape',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#000000'
                  },
                  {
                    lightness: 20
                  }
                ]
              },
              {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#000000'
                  },
                  {
                    lightness: 21
                  }
                ]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry.fill',
                stylers: [
                  {
                    color: '#000000'
                  },
                  {
                    lightness: 17
                  }
                ]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [
                  {
                    color: '#000000'
                  },
                  {
                    lightness: 29
                  },
                  {
                    weight: 0.2
                  }
                ]
              },
              {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#000000'
                  },
                  {
                    lightness: 18
                  }
                ]
              },
              {
                featureType: 'road.local',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#000000'
                  },
                  {
                    lightness: 16
                  }
                ]
              },
              {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#000000'
                  },
                  {
                    lightness: 19
                  }
                ]
              },
              {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#000000'
                  },
                  {
                    lightness: 17
                  }
                ]
              }
            ]
          }}
        ></GoogleMap>
      </div>
    </>
  )
}
