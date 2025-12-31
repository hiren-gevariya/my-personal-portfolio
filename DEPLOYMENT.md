# Deployment Guide

This guide will help you deploy your portfolio to various platforms.

## Quick Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy" (no configuration needed)
   - Your portfolio will be live in minutes!

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

## Performance Tips

- Enable Vercel Analytics for performance monitoring
- Use Next.js Image component for optimized images
- Enable compression in your hosting platform settings
- Consider adding a CDN for static assets

