'use client'

import LocationCard from './LocationCard'

interface LocationsSectionProps {
  visibleElements: Set<string>
}

const locations = [
  { name: '東京', country: '日本', lat: 35.6762, lng: 139.6503, schedule: '毎月第2土曜日' },
  { name: '広島', country: '日本', lat: 34.3853, lng: 132.4553, schedule: '毎月第3日曜日' },
  { name: '島根', country: '日本', lat: 35.4724, lng: 133.0505, schedule: '毎月第1土曜日' },
  { name: 'ブリスベン', country: 'オーストラリア', lat: -27.4698, lng: 153.0251, schedule: '毎月第2土曜日' },
  { name: 'パース', country: 'オーストラリア', lat: -31.9505, lng: 115.8605, schedule: '毎月第4日曜日' },
  { name: 'メルボルン', country: 'オーストラリア', lat: -37.8136, lng: 144.9631, schedule: '毎月第3土曜日' },
  { name: '宜蘭', country: '台湾', lat: 24.7021, lng: 121.7377, schedule: '毎月第1日曜日' }
]

export default function LocationsSection({ visibleElements }: LocationsSectionProps) {
  return (
    <section id="locations" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">活動エリア</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            世界7拠点で定期開催中。あなたの街でも男子会に参加しませんか？
          </p>
        </div>

        {/* Google Maps Embed */}
        <div className="mb-16">
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0273901684143!2d139.65031!3d35.6762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b857628235d%3A0xcdd8aef709a2b520!2z5p2x5Lqs!5e0!3m2!1sja!2sjp!4v1642000000000!5m2!1sja!2sjp"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>

        {/* Location List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <LocationCard 
              key={index}
              location={location}
              index={index}
              isVisible={true}
            />
          ))}
        </div>
      </div>
    </section>
  )
}