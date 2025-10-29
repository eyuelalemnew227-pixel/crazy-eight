# Fix: Firebase API Key Error on GitHub Pages

## The Problem
You're getting: `Firebase: Error (auth/api-key-not-valid.-please-pass-a-valid-api-key.)`

This happens because Firebase needs to authorize your GitHub Pages domain.

## Solution

### Step 1: Add GitHub Pages Domain to Firebase Authorized Domains

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **crazy-eights-ac61b**
3. Click on **Authentication** in the left sidebar
4. Click on **Settings** tab (gear icon ⚙️ at the top)
5. Scroll down to **Authorized domains**
6. Click **Add domain**
7. Add these domains:
   - `eyuelalemnew227-pixel.github.io`
   - `localhost` (if not already there, for local development)
8. Click **Add**

### Step 2: Check API Key Restrictions (Important!)

Your API key might have HTTP referrer restrictions. You need to allow your GitHub Pages domain:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project: **crazy-eights-ac61b**
3. Go to **APIs & Services** → **Credentials**
4. Find your API key: **AIzaSyB4vaC-BEagN1pk-6gFter0CrBcowL8hHc**
5. Click on the API key to edit it
6. Under **Application restrictions**, check what's selected:
   - If "None" is selected: You're good, proceed to Step 3
   - If "HTTP referrers" is selected: You need to add your GitHub Pages domain
7. If "HTTP referrers" is selected:
   - Click **Add an item**
   - Add: `https://eyuelalemnew227-pixel.github.io/*`
   - Add: `https://eyuelalemnew227-pixel.github.io/crazy-eight/*`
   - Click **Save**

### Step 3: Wait and Test

1. Wait 5-10 minutes for changes to propagate
2. Clear your browser cache or use incognito mode
3. Try logging in again at: https://eyuelalemnew227-pixel.github.io/crazy-eight

## Alternative: Remove API Key Restrictions (Less Secure but Easier)

If you're having trouble with restrictions, you can temporarily remove them:

1. In Google Cloud Console → Credentials
2. Click your API key
3. Under **Application restrictions**, select **None**
4. Under **API restrictions**, make sure Firebase APIs are allowed
5. Click **Save**

**Warning**: This makes your API key usable from any domain. Only do this if you're okay with that for now.

## Still Not Working?

Check these:
- ✅ Is the domain added in Firebase Authentication → Settings → Authorized domains?
- ✅ Are there no API key restrictions blocking GitHub Pages?
- ✅ Did you wait a few minutes for changes to propagate?
- ✅ Did you clear your browser cache?
- ✅ Is your deployed site using the correct Firebase config?

