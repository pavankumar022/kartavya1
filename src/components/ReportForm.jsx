import { useState } from 'react'
import ClickBubbleEffect from './ClickBubbleEffect'

const ReportForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    location: '',
    image: null,
  })

  const categories = [
    'Roads & Infrastructure',
    'Water Supply',
    'Sanitation',
    'Electricity',
    'Parks & Recreation',
    'Traffic',
    'Waste Management',
    'Other',
  ]

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Report submitted successfully!')
    setFormData({
      title: '',
      description: '',
      category: '',
      location: '',
      image: null,
    })
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
        <h1 className="text-5xl font-bold text-dark-gray mb-6">Report an Issue</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-base font-semibold text-dark-gray mb-2">
              Issue Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="e.g., Pothole on Main Street"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-dark-red focus:outline-none transition-all text-lg"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-base font-semibold text-dark-gray mb-2">
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Describe the issue in detail..."
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-orange-primary focus:outline-none transition-all resize-none"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-base font-semibold text-dark-gray mb-2">
              Category *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-orange-primary focus:outline-none transition-all bg-white"
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-base font-semibold text-dark-gray mb-2">
              Location *
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="Enter address or click to use current location"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-dark-red focus:outline-none transition-all text-lg"
            />
            <button
              type="button"
              className="mt-2 text-sm text-green-secondary font-semibold hover:underline"
            >
              📍 Use Current Location
            </button>
          </div>

          {/* Map Picker Placeholder */}
          <div>
            <label className="block text-base font-semibold text-dark-gray mb-2">
              Map Location
            </label>
            <div className="w-full h-48 bg-gray-200 rounded-xl flex items-center justify-center border-2 border-gray-300">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-2">🗺️</div>
                <div>Map picker will be integrated here</div>
              </div>
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-base font-semibold text-dark-gray mb-2">
              Upload Photo
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-orange-primary transition-all">
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                <div className="text-4xl mb-2">📷</div>
                <div className="text-gray-600 mb-2">
                  {formData.image ? formData.image.name : 'Click to upload or drag and drop'}
                </div>
                <div className="text-sm text-gray-500">PNG, JPG up to 10MB</div>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <ClickBubbleEffect className="w-full">
            <button
              type="submit"
              className="w-full px-8 py-4 bg-dark-red text-white rounded-xl font-bold text-xl hover:bg-dark-red-light transition-all shadow-lg hover:shadow-xl"
            >
              Submit Report
            </button>
          </ClickBubbleEffect>
        </form>
      </div>
    </div>
  )
}

export default ReportForm

