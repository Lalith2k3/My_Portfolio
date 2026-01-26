# Deployment Guide

This guide provides detailed instructions for deploying your portfolio to Netlify.

## Prerequisites

- A Netlify account (free tier is sufficient)
- Git installed on your machine
- Node.js and npm installed

## Deployment Methods

### Method 1: Netlify Drop (Quickest - No Git Required)

Perfect for quick testing or if you don't want to use Git.

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy**:
   - Go to https://app.netlify.com/drop
   - Drag and drop the `dist` folder
   - Your site will be live in seconds!

**Pros**: Fastest method, no Git required
**Cons**: No automatic updates, manual redeployment needed

---

### Method 2: Git Integration (Recommended)

Best for ongoing development with automatic deployments.

#### Step 1: Create a Git Repository

```bash
# Initialize Git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"
```

#### Step 2: Push to GitHub

```bash
# Create a new repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

#### Step 3: Connect to Netlify

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click **"New site from Git"**
3. Choose **GitHub** (or your Git provider)
4. Authorize Netlify to access your repositories
5. Select your portfolio repository
6. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - (These are auto-detected from `netlify.toml`)
7. Click **"Deploy site"**

#### Step 4: Configure Custom Domain (Optional)

1. In your site dashboard, go to **Domain settings**
2. Click **"Add custom domain"**
3. Follow the instructions to configure DNS

**Pros**: Automatic deployments on every push, preview deployments for PRs
**Cons**: Requires Git setup

---

### Method 3: Netlify CLI

Great for developers who prefer command-line tools.

#### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

#### Step 2: Login to Netlify

```bash
netlify login
```

This will open a browser window for authentication.

#### Step 3: Initialize and Deploy

```bash
# Build the project
npm run build

# Deploy to production
netlify deploy --prod

# Follow the prompts:
# - Create & configure a new site? Yes
# - Choose a site name (or leave blank for random)
# - Publish directory: dist
```

#### Subsequent Deployments

```bash
npm run build
netlify deploy --prod
```

**Pros**: Full control, scriptable, works with CI/CD
**Cons**: Requires CLI installation and setup

---

## Post-Deployment

### 1. Configure Environment Variables (if needed)

If you add any API keys or secrets:

1. Go to **Site settings** → **Build & deploy** → **Environment**
2. Add your environment variables
3. Redeploy the site

### 2. Enable HTTPS

Netlify automatically provisions SSL certificates. Ensure HTTPS is enabled:
- Go to **Domain settings** → **HTTPS**
- Enable "Force HTTPS"

### 3. Set Up Redirects (Already Configured)

The `netlify.toml` file includes redirect rules for SPA routing:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 4. Performance Optimization

Netlify automatically provides:
- ✅ CDN distribution
- ✅ Asset optimization
- ✅ Brotli compression
- ✅ HTTP/2 support

### 5. Monitor Your Site

- **Analytics**: Enable Netlify Analytics in site settings
- **Forms**: If you add forms, enable Netlify Forms
- **Functions**: Deploy serverless functions if needed

---

## Continuous Deployment Workflow

Once connected via Git:

1. **Make changes** to your code locally
2. **Commit** changes:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   ```
3. **Push** to GitHub:
   ```bash
   git push
   ```
4. **Automatic deployment** - Netlify builds and deploys automatically!

---

## Troubleshooting

### Build Fails

**Check build logs** in Netlify dashboard:
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility
- Check for syntax errors

### 404 Errors

- Ensure `netlify.toml` is in the root directory
- Verify redirect rules are configured

### Slow Build Times

- Enable build caching in Netlify settings
- Optimize dependencies
- Use `npm ci` instead of `npm install`

### Images Not Loading

- Ensure images are in `src/public/` directory
- Check image paths in code
- Verify images are committed to Git

---

## Custom Domain Setup

### Using Netlify DNS (Recommended)

1. Purchase domain from any registrar
2. In Netlify: **Domain settings** → **Add custom domain**
3. Update nameservers at your registrar to Netlify's:
   - dns1.p01.nsone.net
   - dns2.p01.nsone.net
   - dns3.p01.nsone.net
   - dns4.p01.nsone.net

### Using External DNS

1. Add custom domain in Netlify
2. Create A record pointing to Netlify's load balancer IP
3. Create CNAME for www subdomain

---

## Performance Tips

1. **Enable Asset Optimization**:
   - Go to **Build & deploy** → **Post processing**
   - Enable CSS, JS, and image optimization

2. **Use Netlify's Image CDN**:
   - Automatically optimizes images
   - Serves WebP format when supported

3. **Enable Prerendering** (for better SEO):
   - Install `@netlify/plugin-prerender`
   - Add to `netlify.toml`

---

## Security Best Practices

1. **Enable HTTPS** (automatic with Netlify)
2. **Set security headers** in `netlify.toml`:
   ```toml
   [[headers]]
     for = "/*"
     [headers.values]
       X-Frame-Options = "DENY"
       X-XSS-Protection = "1; mode=block"
       X-Content-Type-Options = "nosniff"
   ```
3. **Keep dependencies updated**:
   ```bash
   npm audit
   npm update
   ```

---

## Cost Considerations

**Netlify Free Tier includes**:
- 100 GB bandwidth/month
- 300 build minutes/month
- Unlimited sites
- HTTPS
- Continuous deployment

**Upgrade if you need**:
- More bandwidth
- More build minutes
- Team collaboration features
- Advanced analytics

---

## Support

- **Netlify Docs**: https://docs.netlify.com
- **Community Forum**: https://answers.netlify.com
- **Status Page**: https://www.netlifystatus.com

---

**Your portfolio is now live! 🎉**

Share your portfolio URL and showcase your work to the world!
