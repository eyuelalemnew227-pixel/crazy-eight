# Deployment Guide

This project is set up for deployment to GitHub Pages. There are two methods available:

## Method 1: Automatic Deployment via GitHub Actions (Recommended)

The project includes a GitHub Actions workflow that automatically deploys when you push to the `main` branch.

### Setup Steps:

1. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under "Source", select **GitHub Actions**

2. **Add Firebase Secrets to GitHub:**
   - Go to **Settings** → **Secrets and variables** → **Actions**
   - Click **New repository secret** and add each of these:
     - `VITE_FIREBASE_API_KEY`
     - `VITE_FIREBASE_AUTH_DOMAIN`
     - `VITE_FIREBASE_PROJECT_ID`
     - `VITE_FIREBASE_STORAGE_BUCKET`
     - `VITE_FIREBASE_MESSAGING_SENDER_ID`
     - `VITE_FIREBASE_APP_ID`

3. **Push to main branch:**
   - The workflow will automatically build and deploy your app
   - Check the **Actions** tab to see deployment progress
   - Your app will be live at: `https://eyuelalemnew227-pixel.github.io/crazy-eight`

## Method 2: Manual Deployment using gh-pages

You can also deploy manually using the npm script:

```bash
npm run deploy
```

This will:
1. Build your production-ready app
2. Deploy it to the `gh-pages` branch
3. Make it available on GitHub Pages

**Note:** Make sure you have your Firebase credentials set up in a `.env` file before deploying.

## Important Notes

- The app is configured to work with the base path `/crazy-eight/`
- All routes are relative to this base path
- After deployment, it may take a few minutes for the site to be available
- Make sure Firebase is configured to allow your GitHub Pages domain in authorized domains

## Firebase Configuration for Production

After deployment, you need to configure Firebase for GitHub Pages:

### 1. Add Authorized Domain

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **crazy-eights-ac61b**
3. Go to **Authentication** → **Settings** → **Authorized domains**
4. Click **Add domain**
5. Add: `eyuelalemnew227-pixel.github.io`
6. Click **Add**

### 2. Check API Key Restrictions (CRITICAL for fixing API key errors)

If you see "api-key-not-valid" errors, your API key might have restrictions:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project: **crazy-eights-ac61b**
3. Go to **APIs & Services** → **Credentials**
4. Find your API key and click to edit it
5. Under **Application restrictions**:
   - If "HTTP referrers" is selected, add:
     - `https://eyuelalemnew227-pixel.github.io/*`
     - `https://eyuelalemnew227-pixel.github.io/crazy-eight/*`
   - Or temporarily set to "None" for testing
6. Click **Save**
7. Wait 5-10 minutes for changes to propagate

See [FIREBASE_GITHUB_PAGES_FIX.md](./FIREBASE_GITHUB_PAGES_FIX.md) for detailed troubleshooting.

