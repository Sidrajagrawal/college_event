import { useState } from 'react'

function LandingPage() {
  const [showChat, setShowChat] = useState(false)

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Gradient accents in corners */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-400/20 to-teal-400/20 rounded-full blur-3xl"></div>

      {/* Header */}
      <header className="relative z-10 px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center shadow-lg">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <span className="text-xl font-bold text-gray-800">Learnlytics</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-gray-500 hover:text-gray-700 transition-colors">About</a>
          <a href="#resources" className="text-gray-500 hover:text-gray-700 transition-colors">Resources</a>
          <a href="#contact" className="text-gray-500 hover:text-gray-700 transition-colors">Contact</a>
          <a href="#help" className="text-gray-500 hover:text-gray-700 transition-colors">Help</a>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <button className="px-5 py-2 text-sm border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
            Login
          </button>
          <button className="px-5 py-2 text-sm bg-gradient-to-r from-cyan-500 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all">
            Sign Up
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-8 py-8 md:py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Smart QR-Powered Event Passes for Seamless College Fest Entry
            </h1>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed">
              End-to-end registration, instant QR ticketing, and ultra-fast check-ins — no queues, no proxies, no chaos.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-600 text-white text-base font-semibold rounded-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              Get Started
            </button>
          </div>

          {/* Right Image Area */}
          <div className="relative group">
            <div className="relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-cyan-500/30">
              <img 
                src="https://images.unsplash.com/photo-1563461660947-507ef49e9c47?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Group of adult students sitting at a large table working on computers and discussing"
                className="w-full h-[350px] md:h-[400px] object-cover transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Statistics Banner */}
      <section className="relative z-10 py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg shadow-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Stat 1 */}
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">200+</div>
                <div className="text-gray-900 text-sm font-semibold uppercase tracking-wide">INSTITUTIONS</div>
              </div>

              {/* Stat 2 */}
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">92%</div>
                <div className="text-gray-900 text-sm font-semibold uppercase tracking-wide">ENGAGEMENT LIFT</div>
              </div>

              {/* Stat 3 */}
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">247</div>
                <div className="text-gray-900 text-sm font-semibold uppercase tracking-wide">REALTIME ALERTS</div>
              </div>

              {/* Stat 4 */}
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">10+</div>
                <div className="text-gray-900 text-sm font-semibold uppercase tracking-wide">AI RECOMMENDATIONS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setShowChat(!showChat)}
          className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
        >
          <span className="font-semibold">AI</span>
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span>Need help?</span>
        </button>
        
        {showChat && (
          <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">AI Assistant</h3>
              <button
                onClick={() => setShowChat(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-4">How can I help you today?</p>
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default LandingPage

