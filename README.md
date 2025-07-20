# PlumaUA

*Volans ad Cognitionem*

A comprehensive bird watching platform for the University of Arizona community, connecting students, faculty, and staff with the diverse avian life on campus.

## 🚀 Current Status: MVP Complete & Running

**Live Demo**: [http://localhost:3000](http://localhost:3000) (Development Server)

---

## 📋 Implemented Features

### **1. 🏠 Homepage** (`/`)
- **Hero Section**: Welcome banner with U of A colors and desert theme
- **Bird of the Week**: Featured bird showcase with rotating content
- **Quick Actions**: Direct links to all main features
- **Latest Blog Posts**: Recent articles preview with excerpts
- **Navigation**: Clean header with responsive design

### **2. 🐦 Bird Directory** (`/birds`)
- **Grid/List Views**: Toggle between display modes
- **Advanced Filters**: 
  - Size (Small, Medium, Large)
  - Color (Red, Blue, Green, Yellow, etc.)
  - Season (Spring, Summer, Fall, Winter)
- **Search Functionality**: Real-time bird name search
- **Mock Data**: 6 common UA campus birds with detailed information

### **3. 📝 Individual Bird Profiles** (`/birds/[id]`)
- **Detailed Information**: Habitat, diet, behavior, conservation status
- **Quick Facts**: Size, lifespan, migration patterns, nesting habits
- **Related Birds**: Similar species suggestions
- **Recent Sightings**: Latest observations for each bird
- **Photo Gallery**: Placeholder for bird images (ready for Firebase integration)

### **4. 📸 Sightings Log** (`/sightings`)
- **Submission Form**: 
  - Bird selection dropdown
  - Date picker with validation
  - Location input with coordinates
  - Photo upload interface (UI ready)
  - Notes field with character limit
- **Public Feed**: All approved sightings with filters
- **Moderation System**: Approval status indicators
- **Mock Data**: 5 sample sightings across campus locations

### **5. 🗺️ Interactive Map** (`/map`)
- **Leaflet.js Integration**: Full interactive campus map
- **Colored Pins**: Different colors for different bird species
- **Filters**: By bird type and date range
- **Sidebar Details**: Click pins to see sighting information
- **Campus Focus**: Centered on University of Arizona with proper zoom levels

### **6. 📚 Blog & Events** (`/blog`)
- **Tabbed Interface**: Separate sections for blog and events
- **Blog Posts**: 3 sample articles about bird watching and conservation
- **Events Calendar**: Upcoming bird walks and workshops
- **Search Functionality**: Find specific content by title or tags
- **Responsive Design**: Works seamlessly on all devices

### **7. ℹ️ About Page** (`/about`)
- **Mission Statement**: Clear project goals and vision
- **Xin's Story**: Personal founder narrative and motivation
- **What We Do**: 4 main activities explained with icons
- **Get Involved**: Call-to-action sections with direct links
- **Contact Information**: Email and social media links

---

## 🎨 Design & Branding

### **Color Scheme**
- **Cardinal Red**: #AB0520 (Primary accent, buttons, highlights)
- **Navy Blue**: #0C234B (Primary text, headers, navigation)
- **Desert Sand**: #C5B358 (Secondary accent, backgrounds, borders)

### **Theme Elements**
- **Desert Patterns**: Subtle background textures inspired by Sonoran Desert
- **University Identity**: Official UA colors throughout all components
- **Modern UI**: Clean, accessible design with hover effects
- **Responsive**: Mobile-first approach with breakpoint optimization
- **🌙 Dark Mode**: Complete dark theme support with system preference detection
  - **Theme Toggle**: Light/Dark/System modes with smooth transitions
  - **Theme Persistence**: Saves user preference using Zustand store
  - **System Detection**: Automatically matches user's OS theme preference
  - **Full Coverage**: All pages, components, and interactive elements
  - **Consistent Styling**: Proper contrast and accessibility in both themes

### **Typography & Icons**
- **Lucide React Icons**: Consistent iconography across all pages
- **Tailwind CSS**: Utility-first styling system for rapid development
- **Custom Gradients**: Desert-inspired color transitions and backgrounds

---

## 🛠️ Technical Implementation

### **Frontend Stack**
- **Next.js 15**: Latest framework with app router and server components
- **React 18**: Modern component architecture with hooks
- **TypeScript**: Full type safety with custom interfaces
- **Tailwind CSS**: Utility-first styling with custom design system

### **Key Libraries**
- **Leaflet.js**: Interactive mapping with custom markers and popups
- **Lucide React**: Comprehensive icon system
- **Dynamic Imports**: SSR-safe map loading to avoid hydration issues
- **Zustand**: State management for theme persistence and user preferences
- **Tailwind CSS**: Utility-first styling with dark mode support

### **Code Quality**
- **ESLint**: Clean, consistent code with custom rules
- **TypeScript**: Type-safe development with strict mode
- **Build Success**: No errors or warnings in production build
- **Performance**: Optimized bundle sizes and lazy loading

---

## 📊 Current Data Structure

### **Mock Data Includes**
- **6 Bird Species**: American Robin, Cactus Wren, Northern Cardinal, House Sparrow, Mourning Dove, Gila Woodpecker
- **5 Sample Sightings**: Across different campus locations with realistic data
- **3 Blog Posts**: Educational content about birding and conservation
- **2 Events**: Upcoming community activities and workshops

### **TypeScript Interfaces**
- **Bird**: Complete bird information structure with all properties
- **Sighting**: Observation data with location, photos, and metadata
- **BlogPost**: Article content with author, date, and tags
- **Event**: Calendar event information with registration details

---

## 🚀 Ready for Next Phase

### **Backend Integration** (Next Priority)
- **Firebase Setup**: Configuration already prepared in `src/lib/firebase.ts`
- **Authentication**: User login/signup system with email/password
- **Firestore**: Real data storage with collections for birds, sightings, users
- **Storage**: Photo upload functionality with compression and validation

### **Deployment Options**
- **Vercel**: Optimized for Next.js with automatic deployments
- **Netlify**: Alternative hosting with form handling
- **Domain**: Ready for custom domain setup and SSL certificates

### **Enhancement Opportunities**
- **Real-time Updates**: Live sighting notifications with WebSockets
- **Advanced Analytics**: Bird population trends and migration patterns
- **Mobile App**: React Native version for iOS and Android
- **API Integration**: eBird data connection for species information

---

## 🎯 Development Roadmap

### **Phase 1: Backend Integration** (1-2 weeks)
1. Set up Firebase project and configuration
2. Implement user authentication with email/password
3. Connect Firestore for real data storage
4. Add photo upload functionality with Firebase Storage

### **Phase 2: Advanced Features** (2-3 weeks)
1. Real-time notifications for new sightings
2. Advanced search and filtering capabilities
3. User profiles and achievement system
4. Email notifications for events and updates

### **Phase 3: Community Features** (2-3 weeks)
1. Comments and discussions on sightings
2. Bird identification help from experts
3. Expert verification system for rare sightings
4. Community challenges and competitions

### **Phase 4: Analytics & Insights** (1-2 weeks)
1. Bird population trends and seasonal data
2. Migration pattern analysis
3. Campus biodiversity reports
4. Conservation impact metrics and reporting

---

## 🌙 Dark Mode Implementation

### **Features**
- **Theme Toggle**: Three-mode system (Light/Dark/System) with smooth transitions
- **Theme Persistence**: User preferences saved using Zustand store with localStorage
- **System Detection**: Automatically detects and matches OS theme preference
- **Full Coverage**: Complete dark mode styling across all pages and components
- **Accessibility**: Proper contrast ratios and color schemes for both themes

### **Technical Details**
- **Zustand Store**: Centralized theme state management with persistence
- **CSS Variables**: Dynamic color system using Tailwind's dark mode classes
- **Smooth Transitions**: All elements transition smoothly between themes
- **Responsive Design**: Dark mode works seamlessly on all device sizes

### **Components Updated**
- ✅ All page layouts and content sections
- ✅ Navigation header and footer
- ✅ Forms, buttons, and interactive elements
- ✅ Map page with right sidebar
- ✅ Blog posts and events
- ✅ Bird cards and detail pages
- ✅ Sightings form and list
- ✅ About page with all sections

## 🎯 Immediate Next Steps

1. **Test Current Features**: Explore all pages on `localhost:3000`
2. **🌙 Test Dark Mode**: Try the theme toggle and verify all pages adapt properly
3. **Gather User Feedback**: Share with potential users and stakeholders
4. **Choose Development Priority**: Backend integration vs. new features
5. **Plan Deployment Strategy**: Decide on hosting platform and domain

---

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js app router pages
│   ├── about/          # About page with mission and contact
│   ├── birds/          # Bird directory and individual profiles
│   ├── blog/           # Blog posts and events
│   ├── map/            # Interactive map with Leaflet.js
│   └── sightings/      # Sightings log and submission form
├── components/         # Reusable React components
│   ├── layout/         # Header, Footer, Navigation
│   ├── BirdCard.tsx    # Bird display component
│   ├── MapComponent.tsx # Leaflet map integration
│   ├── ThemeProvider.tsx # Dark mode provider component
│   └── ThemeToggle.tsx # Theme toggle button component
├── lib/               # Utility functions and Firebase config
│   ├── firebase.ts    # Firebase initialization
│   └── theme.ts       # Zustand theme store and persistence
└── types/             # TypeScript type definitions
    └── index.ts       # Bird, Sighting, BlogPost, Event interfaces
```

---

## 🎨 Design System

### **Components**
- **Cards**: Consistent styling for bird profiles and blog posts
- **Buttons**: Primary and secondary styles with hover states
- **Forms**: Input fields with validation and error handling
- **Navigation**: Responsive header with mobile menu

### **Layout**
- **Grid System**: Responsive layouts using Tailwind CSS
- **Spacing**: Consistent margins and padding throughout
- **Typography**: Hierarchical text styles with proper contrast
- **Colors**: Semantic color usage for different states

---

## 🔧 Getting Started

1. **Clone the repository**:
```bash
git clone https://github.com/DevXinHuang/PlumaUA.git
cd PlumaUA/pluma-ua
```

2. **Install dependencies**:
```bash
npm install
```

3. **Run the development server**:
```bash
npm run dev
```

4. **Open your browser** and visit [http://localhost:3000](http://localhost:3000)

5. **Explore the features**:
   - Navigate through all pages
   - Test the interactive map
   - Try the bird filters and search
   - **🌙 Test Dark Mode**: Click the theme toggle in the header to switch between light, dark, and system themes
   - Submit a test sighting

---

## 🤝 Contributing

This is a student-led initiative at the University of Arizona. We welcome contributions from all members of the campus community.

### **How to Contribute**
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

### **Areas for Contribution**
- **Content**: Add more bird species and blog posts
- **Features**: Suggest new functionality
- **Design**: Improve UI/UX elements
- **Documentation**: Enhance guides and tutorials

---

## 📄 License

This project is open source and available under the MIT License.

---

## 📞 Contact

- **Email**: contact@plumaua.org
- **GitHub**: [@DevXinHuang/PlumaUA](https://github.com/DevXinHuang/PlumaUA)
- **Location**: University of Arizona, Tucson, AZ

---

*PlumaUA - Connecting the UA community with the amazing bird life that surrounds us every day.*
