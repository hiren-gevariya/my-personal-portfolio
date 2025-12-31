# Deployment Guide

This guide will help you deploy your portfolio to various platforms.

## Quick Deploy to Vercel (Recommended)

### Option 1: Automatic Deployment via Vercel GitHub Integration (Easiest)

1. **Push to GitHub** (if not already done)
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository: `hiren-gevariya/my-personal-portfolio`
   - Click "Deploy" (no configuration needed)
   - Vercel will automatically detect Next.js and deploy
   - **Auto-deployment is enabled by default** - every push to `main` will trigger a new deployment
   - Your portfolio will be live in minutes!

### Option 2: CI/CD Pipeline with GitHub Actions

The repository includes GitHub Actions workflows for automated CI/CD:

1. **CI/CD Pipeline** (`.github/workflows/ci-cd.yml`)
   - Runs on every push and pull request
   - Lints code
   - Builds the project
   - Ensures code quality before deployment

2. **Vercel Deployment** (`.github/workflows/deploy-vercel.yml`)
   - Automatically deploys to Vercel on push to `main`
   - Requires Vercel token setup (see below)

#### Setting up Vercel Token for GitHub Actions (Optional)

If you want to use the GitHub Actions workflow for deployment:

1. **Get Vercel Token**
   - Go to [Vercel Account Settings](https://vercel.com/account/tokens)
   - Click "Create Token"
   - Give it a name (e.g., "GitHub Actions")
   - Copy the token

2. **Add Token to GitHub Secrets**
   - Go to your GitHub repository
   - Navigate to: Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `VERCEL_TOKEN`
   - Value: Paste your Vercel token
   - Click "Add secret"

3. **Get Vercel Project ID and Org ID** (if needed)
   - After first deployment on Vercel, go to Project Settings → General
   - Copy Project ID and Team ID
   - Add as secrets: `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID`

**Note:** Option 1 (Vercel GitHub Integration) is recommended as it's simpler and doesn't require token management.

## Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder, OR
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `.next`

## Deploy to AWS Amplify

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
3. Click "New app" > "Host web app"
4. Connect your repository
5. Amplify will auto-detect Next.js settings
6. Click "Save and deploy"

## Custom Server Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start the server**
   ```bash
   npm start
   ```

3. **Use PM2 for production** (optional)
   ```bash
   npm install -g pm2
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   ```

## Environment Variables

No environment variables are required for basic functionality. If you add features that need API keys or secrets, create a `.env.local` file:

```env
NEXT_PUBLIC_API_KEY=your_api_key
```

## Custom Domain

### Vercel
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### Netlify
1. Go to Site settings
2. Click "Domain management"
3. Add custom domain
4. Configure DNS as instructed

## Troubleshooting

- **Build fails**: Make sure all dependencies are in `package.json`
- **PDF download doesn't work**: Ensure `html2canvas` and `jspdf` are installed
- **Styling issues**: Verify Tailwind CSS is properly configured
- **404 errors**: Check that all routes are properly configured

## CI/CD Pipeline

This project includes automated CI/CD pipelines using GitHub Actions:

### Workflows

1. **CI Pipeline** (`.github/workflows/ci-cd.yml`)
   - ✅ Runs on every push and pull request
   - ✅ Installs dependencies
   - ✅ Runs linter
   - ✅ Builds the project
   - ✅ Validates build artifacts

2. **Deploy Pipeline** (`.github/workflows/deploy-vercel.yml`)
   - ✅ Runs on push to `main` branch
   - ✅ Runs linting and build
   - ✅ Deploys to Vercel production

### Workflow Status

You can check the status of your workflows:
- Go to your GitHub repository
- Click on the "Actions" tab
- View workflow runs and their status

### Manual Workflow Trigger

You can manually trigger the deployment workflow:
- Go to Actions tab in GitHub
- Select "Deploy to Vercel" workflow
- Click "Run workflow"

## Performance Tips

- Enable Vercel Analytics for performance monitoring
- Use Next.js Image component for optimized images
- Enable compression in your hosting platform settings
- Consider adding a CDN for static assets

