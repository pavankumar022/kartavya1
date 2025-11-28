import ClickBubbleEffect from './ClickBubbleEffect'

const TrendingReports = () => {
  const reports = [
    {
      id: 1,
      title: 'Pothole on Main Street',
      category: 'Roads',
      location: 'Mumbai, Maharashtra',
      status: 'In Progress',
      points: 150,
      image: '🛣️',
    },
    {
      id: 2,
      title: 'Broken Streetlight',
      category: 'Infrastructure',
      location: 'Delhi, NCR',
      status: 'Resolved',
      points: 200,
      image: '💡',
    },
    {
      id: 3,
      title: 'Garbage Collection Issue',
      category: 'Sanitation',
      location: 'Bangalore, Karnataka',
      status: 'Pending',
      points: 100,
      image: '🗑️',
    },
    {
      id: 4,
      title: 'Water Leakage',
      category: 'Water Supply',
      location: 'Chennai, Tamil Nadu',
      status: 'In Progress',
      points: 175,
      image: '💧',
    },
    {
      id: 5,
      title: 'Park Maintenance',
      category: 'Parks & Recreation',
      location: 'Pune, Maharashtra',
      status: 'Resolved',
      points: 180,
      image: '🌳',
    },
    {
      id: 6,
      title: 'Traffic Signal Malfunction',
      category: 'Traffic',
      location: 'Hyderabad, Telangana',
      status: 'Pending',
      points: 120,
      image: '🚦',
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Resolved':
        return 'bg-green-secondary text-white'
      case 'In Progress':
        return 'bg-dark-red text-white'
      default:
        return 'bg-gray-400 text-white'
    }
  }

  return (
    <section className="py-20 px-4 bg-beige-light">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 text-dark-gray">
          Trending Reports
        </h2>
        <p className="text-center text-dark-gray mb-12 text-2xl font-medium">
          See what issues are being reported in your community
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report) => (
            <div
              key={report.id}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border border-gray-100"
            >
              <div className="text-6xl mb-4 text-center">{report.image}</div>
              <h3 className="text-2xl font-bold mb-2 text-dark-gray">
                {report.title}
              </h3>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-600">{report.category}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(report.status)}`}>
                  {report.status}
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-4">📍 {report.location}</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-sm font-semibold text-orange-primary">
                  ⭐ {report.points} points
                </span>
                <ClickBubbleEffect>
                  <button className="text-sm text-green-secondary font-semibold hover:underline px-2 py-1 rounded-lg hover:bg-green-secondary/10 transition-colors">
                    View Details →
                  </button>
                </ClickBubbleEffect>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrendingReports

