const Profile = () => {
  const user = {
    name: 'Pac User',
    email: 'pac@example.com',
    points: 2450,
    tier: 'Gold',
    level: 12,
    reportsSubmitted: 23,
    issuesResolved: 18,
    badges: ['🏆 First Report', '⭐ Active Citizen', '🎯 Problem Solver', '🌟 Community Hero'],
    recentActivity: [
      { action: 'Reported issue', description: 'Pothole on Main Street', date: '2 days ago', points: 50 },
      { action: 'Issue resolved', description: 'Broken Streetlight', date: '5 days ago', points: 100 },
      { action: 'Reported issue', description: 'Garbage Collection', date: '1 week ago', points: 50 },
    ],
  }

  const getTierColor = (tier) => {
    switch (tier) {
      case 'Gold':
        return 'bg-yellow-400'
      case 'Silver':
        return 'bg-gray-300'
      case 'Bronze':
        return 'bg-orange-300'
      default:
        return 'bg-gray-200'
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-3xl shadow-lg p-8 mb-6 border border-gray-100">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-40 h-40 bg-gradient-to-br from-dark-red to-green-secondary rounded-full flex items-center justify-center text-6xl text-white font-bold">
            {user.name.charAt(0)}
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold text-dark-gray mb-2">{user.name}</h1>
            <p className="text-dark-gray mb-4 text-lg">{user.email}</p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <span className={`px-4 py-2 rounded-full font-semibold ${getTierColor(user.tier)} text-gray-800`}>
                {user.tier} Tier
              </span>
              <span className="px-4 py-2 rounded-full bg-green-secondary text-white font-semibold">
                Level {user.level}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-3xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-all">
          <div className="text-5xl font-bold text-dark-red mb-2">{user.points}</div>
          <div className="text-dark-gray font-semibold text-lg">Total Points</div>
        </div>
        <div className="bg-white rounded-3xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-all">
          <div className="text-5xl font-bold text-green-secondary mb-2">{user.reportsSubmitted}</div>
          <div className="text-dark-gray font-semibold text-lg">Reports Submitted</div>
        </div>
        <div className="bg-white rounded-3xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-all">
          <div className="text-5xl font-bold text-blue-600 mb-2">{user.issuesResolved}</div>
          <div className="text-dark-gray font-semibold text-lg">Issues Resolved</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100">
          <h2 className="text-3xl font-bold text-dark-gray mb-4">Badges</h2>
          <div className="grid grid-cols-2 gap-4">
            {user.badges.map((badge, index) => (
              <div
                key={index}
                className="bg-beige-light rounded-2xl p-4 text-center hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-2">{badge.split(' ')[0]}</div>
                <div className="text-sm font-semibold text-gray-700">{badge.split(' ').slice(1).join(' ')}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100">
          <h2 className="text-3xl font-bold text-dark-gray mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {user.recentActivity.map((activity, index) => (
              <div
                key={index}
                className="border-l-4 border-dark-red pl-4 py-2"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-dark-gray text-lg">{activity.action}</span>
                  <span className="text-base text-dark-red font-semibold">+{activity.points} pts</span>
                </div>
                <p className="text-base text-dark-gray">{activity.description}</p>
                <p className="text-sm text-dark-gray-light mt-1">{activity.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

