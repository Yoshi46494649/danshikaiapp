import { MapPin, Calendar } from 'lucide-react'

interface Location {
  name: string
  country: string
  lat: number
  lng: number
  schedule: string
}

interface LocationCardProps {
  location: Location
  index: number
  isVisible: boolean
}

export default function LocationCard({ location, index, isVisible }: LocationCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center mb-4">
        <div className="bg-red-100 p-2 rounded-full mr-3">
          <MapPin className="text-red-600" size={20} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{location.name}</h3>
          <span className="text-sm text-gray-500">{location.country}</span>
        </div>
      </div>
      <div className="flex items-center text-gray-600 mb-3">
        <Calendar className="mr-2" size={16} />
        <span className="font-medium">{location.schedule}</span>
      </div>
      <div className="text-sm text-gray-500">
        緯度: {location.lat}°, 経度: {location.lng}°
      </div>
    </div>
  )
}