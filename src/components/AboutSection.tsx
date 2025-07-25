'use client'

import { Users, Globe, Calendar } from 'lucide-react'

interface AboutSectionProps {
  visibleElements: Set<string>
}

export default function AboutSection({ visibleElements }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">男子会とは</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            男同士で語れる場所。世界中に住む日本人男性が気軽に集まり、
            本音で語り合える安心できるコミュニティです。
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="男性たちの会話" 
              className="rounded-xl shadow-lg w-full h-80 object-cover"
            />
          </div>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Users className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">気軽さ・ゆるさ・安心感</h3>
                <p className="text-gray-600 leading-relaxed">
                  堅苦しいルールはありません。リラックスした雰囲気で、
                  自然体の自分でいられる場所です。
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Globe className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">世界7拠点で展開</h3>
                <p className="text-gray-600 leading-relaxed">
                  日本、オーストラリア、台湾の7つの都市で定期的に開催。
                  どこにいても参加できます。
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Calendar className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">ファミリーイベントも</h3>
                <p className="text-gray-600 leading-relaxed">
                  家族連れOKなイベントも定期開催。
                  お子様と一緒に参加できる機会もあります。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
            <div className="text-4xl font-bold text-blue-600 mb-2">7</div>
            <div className="text-gray-600 font-medium">活動拠点</div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
            <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-600 font-medium">累計参加者</div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
            <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-600 font-medium">開催イベント</div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
            <div className="text-4xl font-bold text-orange-600 mb-2">3</div>
            <div className="text-gray-600 font-medium">対象国</div>
          </div>
        </div>
      </div>
    </section>
  )
}