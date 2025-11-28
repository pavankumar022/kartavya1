const DashboardSidebar = ({ currentPage, onNavigate, onClose }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Reports', icon: '📋' },
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'leaderboard', label: 'Leaderboard', icon: '🏆' },
    { id: 'achievements', label: 'Achievements', icon: '🎖️' },
    { id: 'statistics', label: 'Statistics', icon: '📊' },
    { id: 'authorities', label: 'Authorities', icon: '🛡️' },
    { id: 'logout', label: 'Logout', icon: '🚪' },
  ]

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className="fixed inset-0 bg-black/10 z-40 md:hidden"
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-beige-light text-dark-gray z-50 transform transition-transform md:translate-x-0 shadow-xl border-r border-orange-primary/20">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-dark-red rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                K
              </div>
              <span className="text-2xl font-bold text-dark-gray">Kartavya</span>
            </div>
            <button
              onClick={onClose}
              className="md:hidden text-dark-gray hover:text-dark-red"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id)
                  // Don't close sidebar when navigating between dashboard pages
                }}
                className={`w-full flex items-center space-x-3 px-5 py-4 rounded-xl transition-all text-base border border-orange-primary/10 ${
                  currentPage === item.id
                    ? 'bg-dark-red text-white shadow-md font-semibold'
                    : 'bg-beige-light text-dark-gray hover:bg-white shadow-sm font-medium'
                }`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </>
  )
}

export default DashboardSidebar

