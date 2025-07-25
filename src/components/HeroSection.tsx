'use client'

import { ChevronDown, MessageCircle } from 'lucide-react'

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('/hero-bg.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          語れる場所が、<br />ここにある。
        </h1>
        <p className="text-xl md:text-2xl mb-12 font-medium opacity-90">
          世界中の日本人男性がつながる、信頼できるコミュニティ
        </p>
        <a
          href="https://lin.ee/Za6tMUE"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg inline-block"
        >
          <MessageCircle className="inline-block mr-2" size={24} />
          LINE登録して参加する
        </a>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white opacity-80" />
      </div>
    </section>
  )
}