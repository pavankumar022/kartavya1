# Kartavya - Civic-Tech Platform

AI-powered civic-tech platform for reporting and resolving community issues. Built with React and Tailwind CSS, inspired by the Ektara design system.

## Features

- 🏠 **Landing Page** with hero section and informational content
- 📋 **Report Issues** with form, image upload, and location picker
- 🏆 **Leaderboard** showing top contributors
- 👤 **User Profile** with points, badges, and activity
- 🛡️ **Government Authorities** dashboard with statistics
- 📊 **Dashboard** with sidebar navigation
- ✨ **Interactive Bubble Effects** on button clicks

## Design System

- **Colors**: Light beige/off-white backgrounds (#FBE9DD, #F8E2D4), orange-red accent (#E4552C), green accent (#1C7C3B)
- **Typography**: Inter font family
- **Components**: Soft rounded corners, drop shadows, large paddings

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── ClickBubbleEffect.jsx    # Reusable bubble animation component
│   ├── Navbar.jsx               # Sticky navigation bar
│   ├── Hero.jsx                 # Landing page hero section
│   ├── HowItWorks.jsx           # Four-step process section
│   ├── Features.jsx             # Platform features
│   ├── AuthoritiesHighlight.jsx # Authorities call-to-action
│   ├── TrendingReports.jsx     # Card grid for reports
│   ├── DashboardSidebar.jsx    # Dashboard navigation sidebar
│   ├── Profile.jsx              # User profile page
│   ├── ReportForm.jsx           # Issue reporting form
│   ├── Leaderboard.jsx          # User rankings table
│   └── Authorities.jsx          # Government authorities dashboard
├── App.jsx                      # Main application component
├── main.jsx                     # Application entry point
└── index.css                    # Global styles and Tailwind imports
```

## Technologies Used

- React 18
- Tailwind CSS 3
- Vite
- React Router DOM

## License

MIT

