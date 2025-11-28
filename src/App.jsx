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
          <div className="min-h-screen bg-beige-light py-6 px-4">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <h1 className="text-3xl md:text-4xl font-bold text-dark-gray mb-6">My Reports</h1>

              {/* Simple Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white rounded-xl p-4 shadow">
                  <div className="text-2xl font-bold text-dark-gray">0</div>
                  <div className="text-sm text-gray-600">Total</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow">
                  <div className="text-2xl font-bold text-yellow-600">0</div>
                  <div className="text-sm text-gray-600">Pending</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow">
                  <div className="text-2xl font-bold text-blue-600">0</div>
                  <div className="text-sm text-gray-600">In Progress</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow">
                  <div className="text-2xl font-bold text-green-600">0</div>
                  <div className="text-sm text-gray-600">Resolved</div>
                </div>
              </div>

              {/* Reports List */}
              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-xl font-bold text-dark-gray mb-4">Your Reports</h2>
                
                {/* Empty State */}
                <div className="text-center py-12">
                  <div className="text-5xl mb-3">📋</div>
                  <h3 className="text-lg font-semibold text-dark-gray mb-2">No Reports Yet</h3>
                  <p className="text-gray-600 mb-4">Start reporting civic issues in your community</p>
                  <button 
                    onClick={() => handleNavigate('report')}
                    className="px-6 py-3 bg-orange-primary text-white rounded-lg font-semibold hover:bg-orange-primary/90 transition-colors"
                  >
                    Create Report
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
          <div className="min-h-screen bg-beige-light py-6 px-4">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <h1 className="text-3xl md:text-4xl font-bold text-dark-gray mb-6">Search Reports</h1>

              {/* Simple Search */}
              <div className="bg-white rounded-xl shadow p-4 mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search issues by location or category..."
                    className="w-full px-4 py-3 pr-24 border-2 border-gray-200 rounded-lg focus:border-orange-primary focus:outline-none"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-orange-primary text-white rounded-lg font-semibold hover:bg-orange-primary/90">
                    Search
                  </button>
                </div>

                {/* Simple Filters */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                  <select className="px-3 py-2 border border-gray-300 rounded-lg focus:border-orange-primary focus:outline-none">
                    <option>All Categories</option>
                    <option>Roads</option>
                    <option>Sanitation</option>
                    <option>Water Supply</option>
                    <option>Infrastructure</option>
                  </select>
                  
                  <select className="px-3 py-2 border border-gray-300 rounded-lg focus:border-orange-primary focus:outline-none">
                    <option>All Status</option>
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Resolved</option>
                  </select>

                  <select className="px-3 py-2 border border-gray-300 rounded-lg focus:border-orange-primary focus:outline-none">
                    <option>Sort by: Recent</option>
                    <option>Sort by: Popular</option>
                    <option>Sort by: Nearest</option>
                  </select>
                </div>
              </div>

              {/* Reports */}
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

