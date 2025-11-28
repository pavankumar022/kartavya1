import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  const quickLinks = ['About Us', 'Contact', 'Help Center', 'Terms of Service']
  const citizenLinks = ['Tracking', 'Report', 'Resources', 'Community']
  const social = [
    { name: 'Instagram', icon: <FaInstagram />, color: 'hover:bg-pink-500' },
    { name: 'Twitter', icon: <FaTwitter />, color: 'hover:bg-blue-400' },
    { name: 'Facebook', icon: <FaFacebookF />, color: 'hover:bg-blue-600' },
    { name: 'YouTube', icon: <FaYoutube />, color: 'hover:bg-red-600' },
  ]

  return (
    <footer className="bg-[#661222] text-white py-16 px-6 mt-12">
      <div className="max-w-6xl mx-auto space-y-10">
        <div>
          <p className="text-2xl md:text-3xl font-semibold mb-2">
            “Be the Change Bharat Needs – Kartavya Se Shuru Karo”
          </p>
          <p className="text-white/80">
            Join thousands of citizens using Kartavya to report, track, and resolve community issues.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-3">
              {social.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className={`w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-xl transition-all transform hover:scale-110 ${item.color}`}
                  title={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-white/90">
              {quickLinks.map((link) => (
                <li key={link} className="hover:text-white cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">For Citizens</h4>
            <ul className="space-y-2 text-white/90">
              {citizenLinks.map((link) => (
                <li key={link} className="hover:text-white cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2 text-white/80">
            <span>Privacy Policy</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


