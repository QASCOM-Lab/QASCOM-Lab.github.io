# QASCOM-Lab

Quantum-AI-Space Communications Laboratory

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

2. **Set up environment variables (if needed):**
   - Go to **Settings** → **Secrets and variables** → **Actions**
   - Add `GEMINI_API_KEY` if your build requires it (optional, only if the build fails without it)

3. **Push to main/master branch:**
   - The workflow will automatically trigger on push to `main` or `master` branch
   - You can also manually trigger it from the **Actions** tab

4. **Your site will be available at:**
   - `https://qascom-lab.github.io/` (or your GitHub username/organization)

### Local Development

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

### Notes

- The app uses `HashRouter` which is compatible with GitHub Pages (no server-side routing needed)
- The build output goes to the `dist/` folder
- GitHub Actions will automatically build and deploy on every push to the main branch
