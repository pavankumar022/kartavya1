import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import AuthoritiesHighlight from './components/AuthoritiesHighlight'
import TrendingReports from './components/TrendingReports'
import Footer from './components/Footer'
import DashboardSidebar from './components/DashboardSidebar'
import Profile from './components/Profile'
import ReportForm from './components/ReportForm'
import Leaderboard from './components/Leaderboard'
import Authorities from './components/Authorities'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Define dashboard pages that should keep sidebar open
  const dashboardPages = ['dashboard', 'reports', 'profile', 'leaderboard', 'achievements', 'statistics', 'authorities', 'feed', 'report']

  const handleNavigate = (page) => {
    setCurrentPage(page)
    if (page === 'home') {
      setSidebarOpen(false)
    } else if (dashboardPages.includes(page)) {
      // Keep sidebar open when navigating between dashboard pages
      setSidebarOpen(true)
    }
  }

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' && currentPage !== 'home') {
        setCurrentPage('home')
        setSidebarOpen(false)
      }
    }

    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [currentPage])

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
      case 'reports':
        return (
          <div className="min-h-screen bg-beige-light py-8">
            <div className="max-w-7xl mx-auto px-4">
              {/* Header Section */}
              <div className="mb-8">
                <h1 className="text-5xl font-bold text-dark-gray mb-2">My Reports</h1>
                <p className="text-xl text-gray-600">Track and manage all your civic issue reports</p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-gradient-to-br from-orange-primary to-orange-primary/80 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-3xl">📝</div>
                    <div className="text-4xl font-bold">0</div>
                  </div>
                  <p className="text-white/90 font-medium">Total Reports</p>
                </div>

                <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-3xl">⏳</div>
                    <div className="text-4xl font-bold">0</div>
                  </div>
                  <p className="text-white/90 font-medium">Pending</p>
                </div>

                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-3xl">🔄</div>
                    <div className="text-4xl font-bold">0</div>
                  </div>
                  <p className="text-white/90 font-medium">In Progress</p>
                </div>

                <div className="bg-gradient-to-br from-green-secondary to-green-700 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-3xl">✅</div>
                    <div className="text-4xl font-bold">0</div>
                  </div>
                  <p className="text-white/90 font-medium">Resolved</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-3xl shadow-lg p-6 mb-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-dark-gray mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button 
                    onClick={() => handleNavigate('report')}
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-orange-primary to-orange-primary/90 text-white rounded-xl hover:shadow-lg transition-all transform hover:scale-105"
                  >
                    <span className="text-2xl">➕</span>
                    <span className="font-semibold">Create New Report</span>
                  </button>
                  <button className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-secondary to-green-700 text-white rounded-xl hover:shadow-lg transition-all transform hover:scale-105">
                    <span className="text-2xl">📊</span>
                    <span className="font-semibold">View Analytics</span>
                  </button>
                  <button className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all transform hover:scale-105">
                    <span className="text-2xl">🔔</span>
                    <span className="font-semibold">Notifications</span>
                  </button>
                </div>
              </div>

              {/* Reports List */}
              <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-dark-gray">Recent Reports</h2>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-beige-light rounded-lg text-dark-gray font-medium hover:bg-beige-medium transition-colors">All</button>
                    <button className="px-4 py-2 bg-beige-light rounded-lg text-gray-600 hover:bg-beige-medium transition-colors">Pending</button>
                    <button className="px-4 py-2 bg-beige-light rounded-lg text-gray-600 hover:bg-beige-medium transition-colors">Resolved</button>
                  </div>
                </div>

                {/* Empty State */}
                <div className="text-center py-16">
                  <div className="inline-block p-6 bg-gradient-to-br from-orange-primary/10 to-green-secondary/10 rounded-full mb-4">
                    <svg className="w-24 h-24" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="12" y="8" width="40" height="48" rx="4" fill="#E4552C" opacity="0.2" stroke="#E4552C" strokeWidth="2"/>
                      <line x1="20" y1="20" x2="44" y2="20" stroke="#E4552C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="20" y1="28" x2="44" y2="28" stroke="#E4552C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="20" y1="36" x2="36" y2="36" stroke="#E4552C" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="48" cy="48" r="12" fill="#1C7C3B" stroke="white" strokeWidth="3"/>
                      <path d="M48 42V48M48 48V54M48 48H42M48 48H54" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-dark-gray mb-2">No Reports Yet</h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">Start making a difference by reporting civic issues in your community. Your voice matters!</p>
                  <button 
                    onClick={() => handleNavigate('report')}
                    className="px-8 py-4 bg-gradient-to-r from-orange-primary to-orange-primary/90 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105"
                  >
                    Create Your First Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      case 'profile':
        return (
          <div className="min-h-screen bg-beige-light py-8">
            <Profile />
          </div>
        )
      case 'report':
        return (
          <div className="min-h-screen bg-beige-light py-8">
            <ReportForm />
          </div>
        )
      case 'leaderboard':
        return (
          <div className="min-h-screen bg-beige-light py-8">
            <Leaderboard />
          </div>
        )
      case 'authorities':
        return (
          <div className="min-h-screen bg-beige-light py-8">
            <Authorities />
          </div>
        )
      case 'feed':
        return (
          <div className="min-h-screen bg-beige-light py-8">
            <div className="max-w-7xl mx-auto px-4">
              {/* Header Section */}
              <div className="mb-8">
                <h1 className="text-5xl font-bold text-dark-gray mb-2">Community Feed</h1>
                <p className="text-xl text-gray-600">Search and explore civic issues in your area</p>
              </div>

              {/* Search and Filter Section */}
              <div className="bg-white rounded-3xl shadow-lg p-6 mb-8 border border-gray-100">
                {/* Main Search Bar */}
                <div className="mb-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Search for issues, locations, or categories..."
                      className="w-full pl-14 pr-4 py-5 text-lg border-2 border-gray-200 rounded-2xl focus:border-orange-primary focus:outline-none focus:ring-2 focus:ring-orange-primary/20 transition-all"
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-3 bg-gradient-to-r from-orange-primary to-orange-primary/90 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                      Search
                    </button>
                  </div>
                </div>

                {/* Filter Options */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-sm font-semibold text-dark-gray mb-2">Category</label>
                    <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-primary focus:outline-none transition-all">
                      <option>All Categories</option>
                      <option>Roads</option>
                      <option>Infrastructure</option>
                      <option>Sanitation</option>
                      <option>Water Supply</option>
                      <option>Parks & Recreation</option>
                      <option>Traffic</option>
                    </select>
                  </div>

                  {/* Status Filter */}
                  <div>
                    <label className="block text-sm font-semibold text-dark-gray mb-2">Status</label>
                    <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-primary focus:outline-none transition-all">
                      <option>All Status</option>
                      <option>Pending</option>
                      <option>In Progress</option>
                      <option>Resolved</option>
                    </select>
                  </div>

                  {/* Location Filter */}
                  <div>
                    <label className="block text-sm font-semibold text-dark-gray mb-2">Location</label>
                    <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-secondary focus:outline-none transition-all">
                      <option>All Locations</option>
                      <option>Mumbai, Maharashtra</option>
                      <option>Delhi, NCR</option>
                      <option>Bangalore, Karnataka</option>
                      <option>Chennai, Tamil Nadu</option>
                      <option>Pune, Maharashtra</option>
                      <option>Hyderabad, Telangana</option>
                    </select>
                  </div>

                  {/* Sort By */}
                  <div>
                    <label className="block text-sm font-semibold text-dark-gray mb-2">Sort By</label>
                    <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-secondary focus:outline-none transition-all">
                      <option>Most Recent</option>
                      <option>Most Popular</option>
                      <option>Highest Points</option>
                      <option>Nearest to Me</option>
                    </select>
                  </div>
                </div>

                {/* Quick Filter Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-sm font-semibold text-gray-600">Quick Filters:</span>
                  <button className="px-4 py-1.5 bg-orange-primary/10 text-orange-primary rounded-full text-sm font-medium hover:bg-orange-primary/20 transition-colors">🔥 Trending</button>
                  <button className="px-4 py-1.5 bg-green-secondary/10 text-green-secondary rounded-full text-sm font-medium hover:bg-green-secondary/20 transition-colors">📍 Near Me</button>
                  <button className="px-4 py-1.5 bg-blue-500/10 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-500/20 transition-colors">⭐ Top Rated</button>
                  <button className="px-4 py-1.5 bg-yellow-500/10 text-yellow-700 rounded-full text-sm font-medium hover:bg-yellow-500/20 transition-colors">⚡ Urgent</button>
                </div>
              </div>

              {/* Results Info */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-lg text-gray-600">
                  Showing <span className="font-bold text-dark-gray">6</span> reports
                </p>
                <div className="flex gap-2">
                  <button className="p-2 border-2 border-gray-200 rounded-lg hover:border-orange-primary transition-colors" title="Grid View">
                    <svg className="w-5 h-5 text-orange-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button className="p-2 border-2 border-gray-200 rounded-lg hover:border-orange-primary transition-colors" title="List View">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Trending Reports Component */}
              <TrendingReports />
            </div>
          </div>
        )
      case 'achievements':
        return (
          <div className="min-h-screen bg-beige-light py-8">
            <div className="max-w-6xl mx-auto px-4">
              <h1 className="text-5xl font-bold text-dark-gray mb-6">Achievements</h1>
              <div className="bg-white rounded-3xl shadow-lg p-8 text-center text-gray-500">
                <div className="text-6xl mb-4">🎖️</div>
                <p>Your achievements will appear here</p>
              </div>
            </div>
          </div>
        )
      case 'statistics':
        return (
          <div className="min-h-screen bg-beige-light py-8">
            <div className="max-w-6xl mx-auto px-4">
              <h1 className="text-5xl font-bold text-dark-gray mb-6">Statistics</h1>
              <div className="bg-white rounded-3xl shadow-lg p-8 text-center text-gray-500">
                <div className="text-6xl mb-4">📊</div>
                <p>Your statistics will appear here</p>
              </div>
            </div>
          </div>
        )
      case 'logout':
        return (
          <div className="min-h-screen bg-beige-light py-8 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">👋</div>
              <p className="text-xl text-gray-600">Logged out successfully</p>
            </div>
          </div>
        )
      default:
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <HowItWorks />
            <Features />
            <AuthoritiesHighlight onNavigate={handleNavigate} />
            <TrendingReports />
            <Footer />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        sidebarOpen={sidebarOpen && dashboardPages.includes(currentPage)}
      />
      
      {sidebarOpen && dashboardPages.includes(currentPage) && (
        <DashboardSidebar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onClose={() => setSidebarOpen(false)}
        />
      )}

      <div className={sidebarOpen && dashboardPages.includes(currentPage) ? 'md:ml-64' : ''}>
        {renderPage()}
      </div>
    </div>
  )
}

export default App

