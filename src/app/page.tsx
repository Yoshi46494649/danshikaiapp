'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronDown, MapPin, Calendar, Users, ExternalLink, MessageCircle, Instagram, Globe, Twitter, Facebook, Youtube } from 'lucide-react'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [visibleElements, setVisibleElements] = useState(new Set<string>())
  const observerRef = useRef<IntersectionObserver>()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('[data-animate]')
    elements.forEach(el => observerRef.current?.observe(el))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    // Input validation for security
    if (!sectionId || typeof sectionId !== 'string' || sectionId.length > 50) {
      console.warn('Invalid section ID provided')
      return
    }
    
    // Sanitize input - only allow alphanumeric, dash, underscore
    const sanitizedId = sectionId.replace(/[^a-zA-Z0-9\-_]/g, '')
    if (sanitizedId !== sectionId) {
      console.warn('Section ID contains invalid characters')
      return
    }
    
    const element = document.getElementById(sanitizedId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const locations = [
    { name: '東京', country: '日本', lat: 35.6762, lng: 139.6503, schedule: '不定期' },
    { name: '広島', country: '日本', lat: 34.3853, lng: 132.4553, schedule: '不定期' },
    { name: '島根', country: '日本', lat: 35.4724, lng: 133.0505, schedule: '不定期' },
    { name: 'ブリスベン', country: 'オーストラリア', lat: -27.4698, lng: 153.0251, schedule: '次回8月予定' },
    { name: 'パース', country: 'オーストラリア', lat: -31.9505, lng: 115.8605, schedule: '次回8月予定' },
    { name: 'メルボルン', country: 'オーストラリア', lat: -37.8136, lng: 144.9631, schedule: '次回9月予定' },
    { name: '宜蘭', country: '台湾', lat: 24.7021, lng: 121.7377, schedule: '不定期' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <img src="/smalllogo.png" alt="男子会" className="h-24" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-black transition-colors">男子会とは</button>
                <button onClick={() => scrollToSection('locations')} className="text-gray-700 hover:text-black transition-colors">活動エリア</button>
                <button onClick={() => scrollToSection('host-kit')} className="text-gray-700 hover:text-black transition-colors">開催キット</button>
                <a href="https://lin.ee/Za6tMUE" target="_blank" rel="noopener noreferrer" className="line-button text-white px-4 py-2 rounded-lg transition-all">LINE登録</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/hero-bg.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            語れる場所が、<br />ここにある。
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
            世界中の日本人男性がつながる、信頼できるコミュニティ
          </p>
          <a 
            href="https://lin.ee/Za6tMUE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block line-button text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 animate-fade-in-up animation-delay-400"
          >
            <MessageCircle className="inline-block mr-2" size={24} />
            LINE登録して参加する
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="text-center mb-16"
            data-animate
            id="about-header"
          >
            <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
              visibleElements.has('about-header') ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}>男子会とは</h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              visibleElements.has('about-header') ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}>
              男同士で語れる場所。世界中に住む日本人男性が気軽に集まり、
              本音で語り合える安心できるコミュニティです。
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              data-animate
              id="about-image"
              className={`transition-all duration-1000 ${
                visibleElements.has('about-image') ? 'animate-slide-in-left' : 'opacity-0 -translate-x-8'
              }`}
            >
              <img 
                src="/hero-bg.jpg"
                alt="男性たちの会話" 
                className="rounded-lg shadow-lg w-full h-80 object-cover hover-lift"
              />
            </div>
            <div 
              data-animate
              id="about-content"
              className={`space-y-6 transition-all duration-1000 ${
                visibleElements.has('about-content') ? 'animate-slide-in-right' : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="flex items-start space-x-4 stagger-item">
                <Users className="text-blue-500 mt-1 animate-float" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">気軽さ・ゆるさ・安心感</h3>
                  <p className="text-gray-600">
                    堅苦しいルールはありません。リラックスした雰囲気で、
                    自然体の自分でいられる場所です。
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 stagger-item">
                <Globe className="text-green-500 mt-1 animate-float" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">世界7拠点で展開</h3>
                  <p className="text-gray-600">
                    日本、オーストラリア、台湾の7つの都市で定期的に開催。
                    どこにいても参加できます。
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 stagger-item">
                <Calendar className="text-purple-500 mt-1 animate-float" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">ファミリーイベントも</h3>
                  <p className="text-gray-600">
                    家族連れOKなイベントも定期開催。
                    お子様と一緒に参加できる機会もあります。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div 
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            data-animate
            id="stats"
          >
            <div className={`bg-white p-6 rounded-lg shadow-sm card-hover transition-all duration-1000 ${
              visibleElements.has('stats') ? 'animate-scale-in' : 'opacity-0 scale-90'
            }`}>
              <div className="text-3xl font-bold text-blue-600 mb-2 counter animate-glow">7</div>
              <div className="text-gray-600">活動拠点</div>
            </div>
            <div className={`bg-white p-6 rounded-lg shadow-sm card-hover transition-all duration-1000 delay-200 ${
              visibleElements.has('stats') ? 'animate-scale-in' : 'opacity-0 scale-90'
            }`}>
              <div className="text-3xl font-bold text-green-600 mb-2 counter animate-glow">500+</div>
              <div className="text-gray-600">累計参加者</div>
            </div>
            <div className={`bg-white p-6 rounded-lg shadow-sm card-hover transition-all duration-1000 delay-400 ${
              visibleElements.has('stats') ? 'animate-scale-in' : 'opacity-0 scale-90'
            }`}>
              <div className="text-3xl font-bold text-purple-600 mb-2 counter animate-glow">50+</div>
              <div className="text-gray-600">開催イベント</div>
            </div>
            <div className={`bg-white p-6 rounded-lg shadow-sm card-hover transition-all duration-1000 delay-600 ${
              visibleElements.has('stats') ? 'animate-scale-in' : 'opacity-0 scale-90'
            }`}>
              <div className="text-3xl font-bold text-orange-600 mb-2 counter animate-glow">3</div>
              <div className="text-gray-600">対象国</div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="text-center mb-16"
            data-animate
            id="locations-header"
          >
            <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
              visibleElements.has('locations-header') ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}>活動エリア</h2>
            <p className={`text-xl text-gray-600 transition-all duration-1000 delay-200 ${
              visibleElements.has('locations-header') ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}>
              世界7拠点で定期開催中。あなたの街でも男子会に参加しませんか？
            </p>
          </div>

          {/* Google Maps Embed */}
          <div 
            className="mb-12"
            data-animate
            id="maps"
          >
            <div className={`bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-all duration-1000 ${
              visibleElements.has('maps') ? 'animate-scale-in' : 'opacity-0 scale-95'
            }`}>
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1wuzMi9Oo6uvbUvdHJmQdBcf10cgmclo&ehbc=2E312F"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                title="男子会活動エリアマップ"
              />
            </div>
          </div>

          {/* Location List */}
          <div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-animate
            id="location-cards"
          >
            {locations.map((location, index) => (
              <div 
                key={index} 
                className={`bg-white p-6 rounded-lg shadow-sm border card-hover transition-all duration-1000 ${
                  visibleElements.has('location-cards') ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-3">
                  <MapPin className="text-red-500 mr-2 animate-pulse-slow" size={20} />
                  <h3 className="text-lg font-semibold">{location.name}</h3>
                  <span className="ml-2 text-sm text-gray-500">({location.country})</span>
                </div>
                <p className="text-gray-600 mb-2">
                  <Calendar className="inline mr-1" size={16} />
                  {location.schedule}
                </p>
                <div className="text-sm text-gray-500">
                  緯度: {location.lat}°, 経度: {location.lng}°
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section id="instagram" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">最新の男子会の様子</h2>
            <p className="text-xl text-gray-600">
              Instagramで最新のイベント情報をチェック
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-6">
              <div className="flex items-center justify-center">
                <Instagram className="text-white mr-3" size={32} />
                <h3 className="text-2xl font-bold text-white">Instagram投稿</h3>
              </div>
            </div>
            
            <div className="p-6 bg-gray-50">
              <div className="flex justify-center">
                <div className="w-full max-w-4xl">
                  {/* SnapWidget */}
                  <div className="relative w-full" style={{ paddingBottom: '66.67%' }}>
                    <iframe 
                      src="https://snapwidget.com/embed/1103737" 
                      className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                      allowTransparency={true}
                      frameBorder="0" 
                      scrolling="no" 
                      style={{ border: 'none', overflow: 'hidden' }}
                      title="Posts from Instagram"
                      sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <p className="text-gray-600 mb-4">
                  男子会の楽しい雰囲気をInstagramでチェック！
                </p>
                <a 
                  href="https://instagram.com/danshikaigrobal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg"
                >
                  <Instagram className="mr-2" size={20} />
                  Instagramをフォロー
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Host Kit Section */}
      <section id="host-kit" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">開催キット</h2>
            <p className="text-xl text-gray-600">
              あなたも主催してみませんか？
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <ExternalLink className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">男子会開催キット</h3>
              <p className="text-gray-600 mb-6">
                男子会を開催するためのガイドライン、準備リスト、
                運営ノウハウをまとめたNotionページをご用意しています。
              </p>
              <ul className="text-left space-y-2 mb-8 max-w-md mx-auto">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  開催準備のチェックリスト
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  参加者募集のテンプレート
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  イベント運営のコツ
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  トラブル対応ガイド
                </li>
              </ul>
              <a 
                href="https://cabapost.notion.site/2300038a9b85800da89dd19505f4bd6a?source=copy_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ExternalLink className="mr-2" size={20} />
                開催キットを見る（Notion）
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LINE Registration Section */}
      <section id="line-register" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">LINE登録のすすめ</h2>
            <p className="text-xl text-gray-600">
              イベント情報をいち早くお届けします
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">LINE登録で得られること</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <MessageCircle className="text-green-500 mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold">最新イベント情報</h4>
                      <p className="text-gray-600">開催予定のイベント情報をいち早くお知らせ</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="text-green-500 mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold">参加申込み</h4>
                      <p className="text-gray-600">LINEから簡単にイベント参加申込みが可能</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Users className="text-green-500 mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold">コミュニティ参加</h4>
                      <p className="text-gray-600">男子会メンバーとの交流やグループチャット</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="bg-green-50 rounded-lg p-8">
                  <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
                    <div className="w-32 h-32 mx-auto mb-4">
                      <img 
                        src="/line-qr.png" 
                        alt="LINE QRコード" 
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                    <p className="text-sm text-gray-600">
                      QRコードをスキャンして<br />LINE友達追加
                    </p>
                  </div>
                  <a 
                    href="https://line.me/ti/p/@583drnec" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-green-500 text-white py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors text-center"
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src="/smalllogo.png" alt="男子会" className="h-8 mb-4" />
              <p className="text-gray-300 mb-4">
                語れる場所が、ここにある。<br />
                世界中の日本人男性がつながるコミュニティ
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">リンク</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">
                    男子会とは
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('locations')} className="text-gray-300 hover:text-white transition-colors">
                    活動エリア
                  </button>
                </li>
                <li>
                  <a href="https://cabapost.notion.site/2300038a9b85800da89dd19505f4bd6a?source=copy_link" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                    開催キット（Notion）
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">SNS & お問い合わせ</h4>
              <div className="space-y-3 mb-4">
                <a 
                  href="https://m.facebook.com/ausdanshikai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <Facebook className="mr-2" size={16} />
                  Facebook
                </a>
                <a 
                  href="https://instagram.com/danshikaigrobal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <Instagram className="mr-2" size={16} />
                  Instagram
                </a>
                <a 
                  href="https://line.me/ti/p/@583drnec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <MessageCircle className="mr-2" size={16} />
                  LINE
                </a>
                <a 
                  href="https://cabapost.notion.site/2300038a9b85800da89dd19505f4bd6a?source=copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <ExternalLink className="mr-2" size={16} />
                  Notion（開催キット）
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 男子会. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
