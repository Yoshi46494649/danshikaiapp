'use client'

interface HeaderProps {
  isScrolled: boolean
  scrollToSection: (sectionId: string) => void
}

export default function Header({ isScrolled, scrollToSection }: HeaderProps) {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>男子会</h1>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('about')} 
                className={`font-medium transition-colors hover:opacity-80 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                男子会とは
              </button>
              <button 
                onClick={() => scrollToSection('locations')} 
                className={`font-medium transition-colors hover:opacity-80 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                活動エリア
              </button>
              <button 
                onClick={() => scrollToSection('host-kit')} 
                className={`font-medium transition-colors hover:opacity-80 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                開催キット
              </button>
              <a
                href="https://lin.ee/Za6tMUE"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold transition-colors"
              >
                LINE登録
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}