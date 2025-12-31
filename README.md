# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases your education, work experience, skills, and projects with print, download, and share functionality.

## Features

- 📄 **Print Functionality** - Print-friendly layout optimized for printing
- 💾 **Download PDF** - Download your portfolio as a PDF file
- 🔗 **Share Options** - Share your portfolio via social media or copy link
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎨 **Modern UI** - Clean and professional design
- ⚡ **Fast Performance** - Built with Next.js for optimal performance

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

Edit the portfolio data in `data/portfolioData.ts`:

- **Personal Info**: Name, title, contact information, social links
- **About**: Professional summary
- **Education**: Degrees, institutions, dates, GPA
- **Experience**: Job titles, companies, descriptions, technologies
- **Skills**: Skill categories and items
- **Projects**: Project names, descriptions, technologies, links

## Deployment

### Quick Deploy to Vercel (Recommended)

1. **Push your code to GitHub** (already done ✅)
2. **Import repository on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import `hiren-gevariya/my-personal-portfolio`
   - Click "Deploy"
3. **Auto-deployment enabled** - Every push to `main` automatically deploys!

### CI/CD Pipeline

This project includes automated CI/CD using GitHub Actions:

- ✅ **CI Pipeline** - Runs on every push/PR:
  - Code linting
  - Build validation
  - Quality checks

- ✅ **Auto Deployment** - Vercel automatically deploys on push to `main`

View workflow status in the [Actions tab](https://github.com/hiren-gevariya/my-personal-portfolio/actions)

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

### Other Platforms

The project is configured for standalone output and can be deployed to:
- Netlify
- AWS Amplify
- Any Node.js hosting platform

Build for production:
```bash
npm run build
npm start
```

## Usage

- **Print**: Click the print button to print your portfolio
- **Download PDF**: Click the download button to save as PDF
- **Share**: Click the share button to share via social media or copy link

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- jsPDF (for PDF generation)
- html2canvas (for PDF conversion)
- React Icons

## License

MIT

