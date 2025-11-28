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
            <div className="max-w-6xl mx-auto px-4">
              <h1 className="text-5xl font-bold text-dark-gray mb-6">My Reports</h1>
              <div className="bg-white rounded-3xl shadow-lg p-8 text-center text-gray-500">
                <div className="text-6xl mb-4">📋</div>
                <p>Your reports will appear here</p>
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
            <div className="max-w-6xl mx-auto px-4">
              <h1 className="text-5xl font-bold text-dark-gray mb-6">Community Feed</h1>
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

