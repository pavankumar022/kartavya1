import { useState } from 'react'

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [user, setUser] = useState({
    name: 'Pac User',
    email: 'pac@example.com',
    points: 2450,
    tier: 'Gold',
    level: 12,
    reportsSubmitted: 23,
    issuesResolved: 18,
    profilePhoto: null,
    badges: ['🏆 First Report', '⭐ Active Citizen', '🎯 Problem Solver', '🌟 Community Hero'],
    recentActivity: [
      { action: 'Reported issue', description: 'Pothole on Main Street', date: '2 days ago', points: 50 },
      { action: 'Issue resolved', description: 'Broken Streetlight', date: '5 days ago', points: 100 },
      { action: 'Reported issue', description: 'Garbage Collection', date: '1 week ago', points: 50 },
    ],
  })
  const [editedData, setEditedData] = useState({
    name: user.name,
    email: user.email,
  })

  const handlePhotoChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUser({ ...user, profilePhoto: reader.result })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleEditToggle = () => {
    if (isEditing) {
      // Save changes
      setUser({ ...user, name: editedData.name, email: editedData.email })
    } else {
      // Enter edit mode
      setEditedData({ name: user.name, email: user.email })
    }
    setIsEditing(!isEditing)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setEditedData({ ...editedData, [name]: value })
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
    <div className="max-w-6xl mx-auto px-3 md:px-4 py-4 md:py-8">
      <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-4 md:p-6 lg:p-8 mb-4 md:mb-6 border border-gray-100">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
          {/* Profile Photo with Edit */}
          <div className="relative">
            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-dark-red to-green-secondary rounded-full flex items-center justify-center text-4xl md:text-5xl lg:text-6xl text-white font-bold overflow-hidden">
              {user.profilePhoto ? (
                <img src={user.profilePhoto} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                user.name.charAt(0)
              )}
            </div>
            {/* Camera Icon for Photo Upload */}
            <label 
              htmlFor="profile-photo-upload" 
              className="absolute bottom-0 right-0 w-8 h-8 md:w-10 md:h-10 bg-orange-primary hover:bg-orange-primary/90 rounded-full flex items-center justify-center cursor-pointer shadow-lg transition-all"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </label>
            <input
              type="file"
              id="profile-photo-upload"
              accept="image/*"
              onChange={handlePhotoChange}
              className="hidden"
            />
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left w-full">
            {isEditing ? (
              <div className="space-y-3">
                <input
                  type="text"
                  name="name"
                  value={editedData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 md:px-4 py-2 text-2xl md:text-3xl lg:text-4xl font-bold text-dark-gray border-2 border-gray-300 rounded-lg focus:border-orange-primary focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  value={editedData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 md:px-4 py-2 text-sm md:text-base lg:text-lg text-dark-gray border-2 border-gray-300 rounded-lg focus:border-orange-primary focus:outline-none"
                />
              </div>
            ) : (
              <>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-gray mb-2">{user.name}</h1>
                <p className="text-dark-gray mb-3 md:mb-4 text-sm md:text-base lg:text-lg">{user.email}</p>
              </>
            )}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-3">
              <span className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full font-semibold text-sm md:text-base ${getTierColor(user.tier)} text-gray-800`}>
                {user.tier} Tier
              </span>
              <span className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-green-secondary text-white font-semibold text-sm md:text-base">
                Level {user.level}
              </span>
            </div>
          </div>

          {/* Edit Button */}
          <button
            onClick={handleEditToggle}
            className="px-4 md:px-6 py-2 md:py-2.5 bg-orange-primary hover:bg-orange-primary/90 text-white rounded-lg md:rounded-xl font-semibold text-sm md:text-base transition-all shadow-md hover:shadow-lg flex items-center gap-2"
          >
            {isEditing ? (
              <>
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Save
              </>
            ) : (
              <>
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                Edit Profile
              </>
            )}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-4 md:p-6 text-center border border-gray-100 hover:shadow-xl transition-all">
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-red mb-2">{user.points}</div>
          <div className="text-dark-gray font-semibold text-sm md:text-base lg:text-lg">Total Points</div>
        </div>
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-4 md:p-6 text-center border border-gray-100 hover:shadow-xl transition-all">
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-secondary mb-2">{user.reportsSubmitted}</div>
          <div className="text-dark-gray font-semibold text-sm md:text-base lg:text-lg">Reports Submitted</div>
        </div>
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-4 md:p-6 text-center border border-gray-100 hover:shadow-xl transition-all">
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-2">{user.issuesResolved}</div>
          <div className="text-dark-gray font-semibold text-sm md:text-base lg:text-lg">Issues Resolved</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-4 md:p-6 border border-gray-100">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-dark-gray mb-3 md:mb-4">Badges</h2>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {user.badges.map((badge, index) => (
              <div
                key={index}
                className="bg-beige-light rounded-xl md:rounded-2xl p-3 md:p-4 text-center hover:shadow-md transition-all"
              >
                <div className="text-2xl md:text-3xl mb-2">{badge.split(' ')[0]}</div>
                <div className="text-xs md:text-sm font-semibold text-gray-700">{badge.split(' ').slice(1).join(' ')}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-4 md:p-6 border border-gray-100">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-dark-gray mb-3 md:mb-4">Recent Activity</h2>
          <div className="space-y-3 md:space-y-4">
            {user.recentActivity.map((activity, index) => (
              <div
                key={index}
                className="border-l-4 border-dark-red pl-3 md:pl-4 py-2"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-dark-gray text-sm md:text-base lg:text-lg">{activity.action}</span>
                  <span className="text-xs md:text-sm lg:text-base text-dark-red font-semibold">+{activity.points} pts</span>
                </div>
                <p className="text-xs md:text-sm lg:text-base text-dark-gray">{activity.description}</p>
                <p className="text-xs md:text-sm text-dark-gray-light mt-1">{activity.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

