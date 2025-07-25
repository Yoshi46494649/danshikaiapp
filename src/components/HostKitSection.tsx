import { ExternalLink } from 'lucide-react'

export default function HostKitSection() {
  return (
    <section id="host-kit" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">開催キット</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            あなたも主催してみませんか？
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl shadow-sm p-12">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
              <ExternalLink className="text-blue-600" size={40} />
            </div>
            <h3 className="text-3xl font-semibold mb-6 text-gray-900">男子会開催キット</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed text-lg">
              男子会を開催するためのガイドライン、準備リスト、
              運営ノウハウをまとめたNotionページをご用意しています。
            </p>
            <ul className="text-left space-y-4 mb-10 max-w-lg mx-auto">
              <li className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                <span className="text-gray-700 font-medium">開催準備のチェックリスト</span>
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                <span className="text-gray-700 font-medium">参加者募集のテンプレート</span>
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                <span className="text-gray-700 font-medium">イベント運営のコツ</span>
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                <span className="text-gray-700 font-medium">トラブル対応ガイド</span>
              </li>
            </ul>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg"
            >
              <ExternalLink className="mr-2" size={20} />
              開催キットを見る（Notion）
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}