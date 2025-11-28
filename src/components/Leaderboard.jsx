const Leaderboard = () => {
  const users = [
    { rank: 1, name: 'Rajesh Kumar', points: 5420, tier: 'Gold', reports: 45, resolved: 38, badge: '👑' },
    { rank: 2, name: 'Priya Sharma', points: 4890, tier: 'Gold', reports: 42, resolved: 35, badge: '🥇' },
    { rank: 3, name: 'Amit Patel', points: 4650, tier: 'Gold', reports: 40, resolved: 33, badge: '🥈' },
    { rank: 4, name: 'Sneha Reddy', points: 4320, tier: 'Silver', reports: 38, resolved: 30, badge: '🥉' },
    { rank: 5, name: 'Vikram Singh', points: 4100, tier: 'Silver', reports: 36, resolved: 28, badge: '⭐' },
    { rank: 6, name: 'Anjali Mehta', points: 3850, tier: 'Silver', reports: 34, resolved: 27, badge: '⭐' },
    { rank: 7, name: 'Rohit Verma', points: 3620, tier: 'Silver', reports: 32, resolved: 25, badge: '⭐' },
    { rank: 8, name: 'Kavita Nair', points: 3400, tier: 'Bronze', reports: 30, resolved: 23, badge: '⭐' },
    { rank: 9, name: 'Suresh Iyer', points: 3180, tier: 'Bronze', reports: 28, resolved: 22, badge: '⭐' },
    { rank: 10, name: 'Meera Joshi', points: 2950, tier: 'Bronze', reports: 26, resolved: 20, badge: '⭐' },
  ]

  const getTierColor = (tier) => {
    switch (tier) {
      case 'Gold':
        return 'bg-yellow-400 text-gray-800'
      case 'Silver':
        return 'bg-gray-300 text-gray-800'
      case 'Bronze':
        return 'bg-orange-300 text-gray-800'
      default:
        return 'bg-gray-200 text-gray-800'
    }
  }

  const getRankColor = (rank) => {
    if (rank === 1) return 'bg-gradient-to-r from-yellow-400 to-yellow-600'
    if (rank === 2) return 'bg-gradient-to-r from-gray-300 to-gray-400'
    if (rank === 3) return 'bg-gradient-to-r from-orange-300 to-orange-400'
    return 'bg-white'
  }

  return (
    <div className="max-w-6xl mx-auto px-3 md:px-4 py-4 md:py-8">
      <div className="text-center mb-4 md:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-dark-gray mb-2 md:mb-4">
          🏆 Leaderboard
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-dark-gray font-medium px-4">
          Top contributors making a difference in their communities
        </p>
      </div>

      <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg overflow-hidden border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-dark-gray text-white">
              <tr>
                <th className="px-3 md:px-6 py-3 md:py-4 text-left font-semibold text-xs md:text-sm lg:text-base">Rank</th>
                <th className="px-3 md:px-6 py-3 md:py-4 text-left font-semibold text-xs md:text-sm lg:text-base">User</th>
                <th className="px-3 md:px-6 py-3 md:py-4 text-left font-semibold text-xs md:text-sm lg:text-base">Points</th>
                <th className="px-3 md:px-6 py-3 md:py-4 text-left font-semibold text-xs md:text-sm lg:text-base hidden sm:table-cell">Tier</th>
                <th className="px-3 md:px-6 py-3 md:py-4 text-left font-semibold text-xs md:text-sm lg:text-base hidden md:table-cell">Reports</th>
                <th className="px-3 md:px-6 py-3 md:py-4 text-left font-semibold text-xs md:text-sm lg:text-base hidden md:table-cell">Resolved</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.rank}
                  className={`border-b border-gray-200 hover:bg-beige-light transition-colors ${getRankColor(user.rank)}`}
                >
                  <td className="px-3 md:px-6 py-3 md:py-4">
                    <div className="flex items-center space-x-1 md:space-x-2">
                      <span className="text-lg md:text-xl lg:text-2xl">{user.badge}</span>
                      <span className="font-bold text-sm md:text-base lg:text-lg">#{user.rank}</span>
                    </div>
                  </td>
                  <td className="px-3 md:px-6 py-3 md:py-4">
                    <div className="font-semibold text-gray-800 text-xs md:text-sm lg:text-base">{user.name}</div>
                  </td>
                  <td className="px-3 md:px-6 py-3 md:py-4">
                    <span className="font-bold text-dark-red text-sm md:text-base lg:text-lg">{user.points.toLocaleString()}</span>
                  </td>
                  <td className="px-3 md:px-6 py-3 md:py-4 hidden sm:table-cell">
                    <span className={`px-2 md:px-3 py-1 rounded-full text-xs font-semibold ${getTierColor(user.tier)}`}>
                      {user.tier}
                    </span>
                  </td>
                  <td className="px-3 md:px-6 py-3 md:py-4 text-gray-700 text-xs md:text-sm lg:text-base hidden md:table-cell">{user.reports}</td>
                  <td className="px-3 md:px-6 py-3 md:py-4 hidden md:table-cell">
                    <span className="text-green-secondary font-semibold text-xs md:text-sm lg:text-base">{user.resolved}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard

