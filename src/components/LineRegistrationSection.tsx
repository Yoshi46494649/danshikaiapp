import { MessageCircle, Calendar, Users } from 'lucide-react'

export default function LineRegistrationSection() {
  return (
    <section id="line-register" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">LINE登録のすすめ</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            イベント情報をいち早くお届けします
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-semibold mb-8 text-gray-900">LINE登録で得られること</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <MessageCircle className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-gray-900">最新イベント情報</h4>
                    <p className="text-gray-600 leading-relaxed">開催予定のイベント情報をいち早くお知らせ</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Calendar className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-gray-900">参加申込み</h4>
                    <p className="text-gray-600 leading-relaxed">LINEから簡単にイベント参加申込みが可能</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Users className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-gray-900">コミュニティ参加</h4>
                    <p className="text-gray-600 leading-relaxed">男子会メンバーとの交流やグループチャット</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="bg-green-50 rounded-xl p-6 mb-6">
                  <div className="w-40 h-40 bg-gray-200 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <img
                      src="/line-qr.png"
                      alt="LINE QRコード"
                      className="w-40 h-40 object-contain rounded-xl"
                    />
                  </div>
                  <p className="text-gray-600 font-medium">
                    QRコードをスキャンして<br />LINE友達追加
                  </p>
                </div>
                <a
                  href="https://lin.ee/Za6tMUE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 text-white py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors shadow-lg block text-center"
                >
                  <MessageCircle className="inline mr-2" size={24} />
                  LINE登録する
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}