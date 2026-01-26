# Lalith Koushik Vanam - Portfolio Website

A modern, responsive portfolio website showcasing AI/ML and Full Stack development expertise, built with React and Vite.

## 🎯 Features

- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🎨 **Modern UI/UX** - Clean design with smooth animations
- 🏗️ **Well-Architected** - Follows separation of concerns principle
- 🚀 **Production Ready** - Optimized build for Netlify deployment
- ♿ **Accessible** - WCAG compliant with semantic HTML

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.jsx/css   # Navigation header
│   │   ├── Hero.jsx/css     # Hero section with profile
│   │   ├── About.jsx/css    # About & education section
│   │   ├── Experience.jsx/css # Work experience timeline
│   │   ├── Projects.jsx/css # Projects showcase
│   │   ├── Skills.jsx/css   # Skills with progress bars
│   │   ├── Contact.jsx/css  # Contact form
│   │   └── Footer.jsx/css   # Footer with social links
│   ├── constants/
│   │   └── personalData.js  # Centralized data store
│   ├── utils/
│   │   └── helpers.js       # Utility functions
│   ├── public/
│   │   └── My_Picture.png   # Profile image
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── netlify.toml             # Netlify deployment config
└── package.json             # Dependencies

```

## 🏛️ Architecture & Design Principles

### Separation of Concerns
- **Data Layer** (`src/constants/personalData.js`) - All content in one place
- **Presentation Layer** (`src/components/`) - Reusable UI components
- **Utility Layer** (`src/utils/`) - Helper functions
- **Styling** - Component-scoped CSS for maintainability

### Component Structure
Each component follows a consistent pattern:
1. Import dependencies
2. Import data from constants
3. Component logic
4. Return JSX
5. Export component

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Run development server**:
```bash
npm run dev
```
Visit `http://localhost:5173`

3. **Build for production**:
```bash
npm run build
```

4. **Preview production build**:
```bash
npm run preview
```

## 🌐 Deployment to Netlify

### Method 1: Drag & Drop (Fastest)
1. Run `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `dist` folder

### Method 2: Git Integration (Recommended)
1. Push code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. Connect to Netlify:
   - Go to [Netlify Dashboard](https://app.netlify.com)
   - Click "New site from Git"
   - Select your repository
   - Build settings are auto-detected from `netlify.toml`
   - Click "Deploy site"

### Method 3: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

## ✏️ Customization

### Update Portfolio Content
All content is centralized in `src/constants/personalData.js`. Simply edit this file to update:
- Personal information
- Education
- Work experience
- Projects
- Skills
- Contact details

### Update Profile Image
Replace `src/public/My_Picture.png` with your photo (recommended: 400x400px)

### Customize Styling
- **Global styles**: `src/index.css`
- **Component styles**: Individual `.css` files in `src/components/`
- **CSS Variables**: Defined in `src/index.css` for easy theme customization

## 🎨 Color Scheme

The portfolio uses CSS variables for easy customization:

```css
--primary-color: #6366f1;    /* Indigo */
--secondary-color: #8b5cf6;  /* Purple */
--text-primary: #1f2937;     /* Dark gray */
--text-secondary: #6b7280;   /* Medium gray */
--bg-primary: #ffffff;       /* White */
--bg-secondary: #f9fafb;     /* Light gray */
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Icons** - Icon library
- **CSS3** - Styling with modern features
- **Netlify** - Hosting and deployment

## 📊 Performance Optimizations

- Code splitting with Vite
- Lazy loading of components
- Optimized images
- Minified production build
- CSS optimization
- Tree shaking for smaller bundle size

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Lalith Koushik Vanam**
- Email: lalithvanam04@gmail.com
- LinkedIn: [linkedin.com/in/lalithvanam-dev](https://www.linkedin.com/in/lalithvanam-dev/)
- Location: Houston, TX

## 🤝 Contributing

Suggestions and improvements are welcome! Feel free to open an issue or submit a pull request.

---

Made with ❤️ by Lalith Koushik Vanam
