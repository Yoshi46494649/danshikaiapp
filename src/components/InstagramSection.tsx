import { Instagram } from 'lucide-react'

export default function InstagramSection() {
  return (
    <section id="instagram" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">最新の男子会の様子</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Instagramで最新のイベント情報をチェック
          </p>
        </div>
        
        <div className="bg-white rounded-xl p-12 text-center shadow-sm">
          <div className="bg-pink-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <Instagram className="text-pink-600" size={40} />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Instagram投稿</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            SnapWidgetを使用してInstagramの最新投稿を表示予定
          </p>
          <p className="text-sm text-gray-500">
            ※ 実装時にSnapWidgetのiframeコードを埋め込みます
          </p>
        </div>
      </div>
    </section>
  )
}