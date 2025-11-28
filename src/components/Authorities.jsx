import ClickBubbleEffect from './ClickBubbleEffect'

const Authorities = () => {
  const stats = [
    { label: 'Total Officials', value: 60, color: 'bg-blue-500' },
    { label: 'Online Now', value: 17, color: 'bg-purple-400' },
    { label: 'Issues Resolved', value: 1278, color: 'bg-purple-600' },
    { label: 'Departments', value: 6, color: 'bg-purple-800' },
  ]

  const departments = [
    { name: 'Municipal Corporation', officials: 12, online: 3, resolved: 245 },
    { name: 'Public Works Department', officials: 8, online: 2, resolved: 189 },
    { name: 'Water Supply Board', officials: 6, online: 1, resolved: 156 },
    { name: 'Electricity Board', officials: 10, online: 4, resolved: 198 },
    { name: 'Traffic Police', officials: 15, online: 5, resolved: 312 },
    { name: 'Sanitation Department', officials: 9, online: 2, resolved: 178 },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-5xl md:text-6xl font-bold text-dark-gray mb-4 flex items-center gap-3">
          <span>🛡️</span>
          <span>Government Authorities</span>
        </h1>
        <p className="text-2xl text-dark-gray font-medium">
          Connect with government officials working for your community
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.color} text-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105`}
          >
            <div className="text-3xl font-bold mb-2">{stat.value.toLocaleString()}</div>
            <div className="text-sm font-medium opacity-90">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-3xl shadow-lg p-6 mb-8 border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by name, department, or role..."
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-orange-primary focus:outline-none"
            />
          </div>
          <select className="px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-orange-primary focus:outline-none bg-white">
            <option>All Departments</option>
            {departments.map((dept) => (
              <option key={dept.name}>{dept.name}</option>
            ))}
          </select>
          <select className="px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-orange-primary focus:outline-none bg-white">
            <option>All Status</option>
            <option>Online</option>
            <option>Offline</option>
          </select>
          <select className="px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-orange-primary focus:outline-none bg-white">
            <option>Sort by Performance</option>
            <option>Most Resolved</option>
            <option>Most Active</option>
          </select>
        </div>
      </div>

      {/* Departments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:scale-[1.02] border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-dark-gray mb-4">{dept.name}</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Officials</span>
                <span className="font-semibold text-gray-800">{dept.officials}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Online Now</span>
                <span className="font-semibold text-green-secondary">{dept.online}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Issues Resolved</span>
                <span className="font-semibold text-dark-red text-lg">{dept.resolved}</span>
              </div>
            </div>
            <ClickBubbleEffect className="w-full">
              <button className="w-full mt-4 px-4 py-2 bg-green-secondary text-white rounded-xl font-semibold hover:bg-green-700 transition-colors shadow-md">
                View Officials →
              </button>
            </ClickBubbleEffect>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-8 bg-gradient-to-r from-green-secondary to-blue-600 rounded-3xl p-8 text-center text-white shadow-xl">
        <h2 className="text-4xl font-bold mb-4">Need Help with an Issue?</h2>
        <p className="text-xl mb-6 opacity-90">
          Report your civic issues and connect with the right government authorities.
        </p>
        <ClickBubbleEffect>
          <button className="px-8 py-4 bg-white text-green-secondary rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
            Report an Issue
          </button>
        </ClickBubbleEffect>
      </div>
    </div>
  )
}

export default Authorities

