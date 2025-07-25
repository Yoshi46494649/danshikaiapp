import { MessageCircle } from 'lucide-react'

interface FooterProps {
  scrollToSection: (sectionId: string) => void
}

export default function Footer({ scrollToSection }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-6">男子会</h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              語れる場所が、ここにある。<br />
              世界中の日本人男性がつながるコミュニティ
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">リンク</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors text-lg">
                  男子会とは
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('locations')} className="text-gray-300 hover:text-white transition-colors text-lg">
                  活動エリア
                </button>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-lg">
                  開催キット（Notion）
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">お問い合わせ</h4>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              ご質問やご相談は<br />LINEからお気軽にどうぞ
            </p>
            <button 
              onClick={() => scrollToSection('line-register')}
              className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors font-semibold"
            >
              <MessageCircle className="inline mr-2" size={20} />
              LINE登録
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-lg">
            © 2025 男子会. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}