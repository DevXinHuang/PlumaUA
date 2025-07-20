# PlumaUA

*Volans ad Cognitionem*

A bird watching platform for the University of Arizona community, connecting students, faculty, and staff with the diverse avian life on campus.

## Features

- **Bird Directory**: Comprehensive guide to campus birds with filters and search
- **Sightings Log**: Report and view bird observations with photo uploads
- **Interactive Map**: Explore sightings across campus with Leaflet.js integration
- **Blog & Events**: Stay updated with bird-related articles and upcoming events
- **Community**: Connect with fellow bird enthusiasts and citizen scientists

## Tech Stack

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS
- **Maps**: Leaflet.js
- **Backend**: Firebase (Firestore, Auth, Storage) - ready for integration
- **Deployment**: Ready for Vercel/Netlify

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/DevXinHuang/PlumaUA.git
cd PlumaUA/pluma-ua
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
src/
├── app/                 # Next.js app router pages
│   ├── about/          # About page
│   ├── birds/          # Bird directory and profiles
│   ├── blog/           # Blog and events
│   ├── map/            # Interactive map
│   └── sightings/      # Sightings log
├── components/         # Reusable React components
├── lib/               # Utility functions and Firebase config
└── types/             # TypeScript type definitions
```

## Design

PlumaUA features the University of Arizona's official colors:
- **Cardinal Red**: #AB0520
- **Navy Blue**: #0C234B
- **Desert Sand**: #C5B358

The design incorporates desert themes and patterns to reflect the unique Sonoran Desert environment of the UA campus.

## Contributing

This is a student-led initiative. We welcome contributions from all members of the University of Arizona community.

## License

This project is open source and available under the MIT License.
