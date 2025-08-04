# TIPS AI Landing Page

A modern, responsive landing page for TIPS AI - a medical training simulation platform inspired by [SimCare AI](https://simcare.ai/). This platform enables medical students to practice with AI-powered virtual patients using interactive conversations and receive instant feedback.

## Features

- **SimCare-Inspired Design**: Clean, professional design with light theme and blue accent colors
- **Responsive**: Fully responsive design that works on all devices
- **Animations**: Smooth animations using Framer Motion
- **Component Library**: Built with HeroUI components
- **TypeScript**: Full TypeScript support for type safety
- **Optimized**: Built with Next.js 15 for optimal performance

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom color scheme
- **Components**: HeroUI React components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full TypeScript support
- **Font**: Inter font family

## Color Scheme

- **Primary Background**: `#FFFFFF` (White)
- **Secondary Background**: `#F9FAFB` (Gray-50)
- **Primary Text**: `#111827` (Gray-900)
- **Secondary Text**: `#6B7280` (Gray-600)
- **Accent Blue**: `#3B82F6` (Blue-600)

## Getting Started

1. **Install dependencies**:
```bash
npm install
```

2. **Run the development server**:
```bash
npm run dev
```

3. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000) (or the port shown in terminal)

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Landing Page Sections

1. **Hero Section**: Main headline with TIPS AI branding and key statistics
2. **Features Section**: Six key features highlighting AI-powered training
3. **Testimonials**: Reviews from medical educators at prestigious institutions
4. **Pricing**: Three-tier pricing plans (Starter, Professional, Enterprise)
5. **FAQ**: Common questions about the medical training platform
6. **CTA Section**: Final call-to-action to start training
7. **Footer**: Contact information and links

## Key Features Highlighted

- **Talk Directly to AI Patients**: Practice with 500+ AI patients
- **Receive Instant Feedback**: Get immediate insights on clinical skills
- **Continuity & Follow-ups**: Maintain ongoing patient relationships
- **Observational AI**: Real-time monitoring and feedback
- **Safe Learning Environment**: Practice without risk to real patients
- **Evidence-Based Training**: Built on University of St Andrews research

## Customization

The landing page is designed to be easily customizable:

- **Colors**: Update the custom color variables in `tailwind.config.ts`
- **Content**: Modify text content directly in `src/app/page.tsx`
- **Animations**: Adjust Framer Motion animations in the component
- **Layout**: Responsive design adapts automatically

## Deployment

This project can be deployed on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **GitHub Pages** (with static export)

For Vercel deployment:
```bash
npm run build
# Then deploy the .next folder
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and CSS variables
│   ├── layout.tsx       # Root layout with HeroUI provider
│   ├── page.tsx         # Main landing page component
│   ├── about/
│   │   └── page.tsx     # About page (Tailwind-only)
│   └── academic/
│       └── page.tsx     # Academic publications page
├── tailwind.config.ts   # Tailwind configuration with custom theme
└── package.json         # Dependencies and scripts
```

## Security & Privacy

- **No vulnerabilities**: All dependencies are up-to-date and secure
- **Private repository**: Code remains private while demo is public
- **Environment variables**: Sensitive data should be stored in `.env` files (not committed)

## Medical Training Platform Features

This landing page showcases TIPS AI's key features:

- **500+ AI Patients**: Diverse medical cases across all specialties
- **Instant Feedback**: AI analysis of communication and clinical skills
- **Session Continuity**: Follow up with patients across multiple sessions
- **Safe Learning**: Practice without risk to real patients
- **Evidence-Based**: Built on research from University of St Andrews
- **Professional Pricing**: Flexible plans for institutions and individuals

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is private and proprietary. All rights reserved.
