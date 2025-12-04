# Discord-Inspired Portfolio Website

A stunning, modern, and fully customizable portfolio website inspired by **Discord's design language** with a beautiful **cyan and light green color theme**. Perfect for junior software engineers entering the Bangladeshi job market, built with senior-level code quality.

![Portfolio Preview](https://via.placeholder.com/1200x630/1e1e2e/00D9FF?text=Portfolio+Website+Preview)

## ✨ Features

### 🎨 Design
- **Discord-inspired UI** with dark theme base and glassmorphism effects
- **Cyan (#00D9FF) and Light Green (#10B981)** color scheme
- Smooth animations and transitions
- Card-based layouts with hover effects
- Modern gradient text effects and glow animations

### 📱 Responsive
- Mobile-first approach
- Fully responsive across all devices
- Touch-friendly navigation
- Optimized for tablets and mobile devices

### 🌓 Dark/Light Mode
- Theme toggle with localStorage persistence
- Smooth theme transitions
- Accessible color contrast in both modes

### 🚀 Performance
- Lazy loading for images
- Optimized animations
- Debounced scroll events
- Minimal JavaScript bundle
- Fast load times

### ♿ Accessibility
- ARIA labels for screen readers
- Keyboard navigation support
- Focus states for all interactive elements
- Semantic HTML structure
- Reduced motion support for users who prefer it

### 🎯 Interactive Features
- Typing animation for roles
- Smooth scroll with offset
- Intersection Observer for scroll animations
- Active navigation highlighting
- Project filtering system
- Form validation with user feedback
- Scroll-to-top button

## 📁 File Structure

```
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styles with CSS custom properties
├── js/
│   ├── data.js            # Portfolio data (CUSTOMIZE THIS!)
│   └── script.js          # Interactive functionality
├── assets/
│   └── images/
│       └── .gitkeep       # Images directory
└── README.md              # This file
```

## 🎯 Sections Included

1. **Navigation Bar** - Sticky navbar with smooth scroll links and theme toggle
2. **Hero Section** - Animated greeting, typing animation, profile photo, CTAs
3. **About Me** - Bio, career objective, personal info cards
4. **Education** - Timeline layout with Bangladesh-specific format (BSc, HSC, SSC)
5. **Skills** - Categorized skill cards with progress indicators
6. **Projects** - Filterable project cards with live demo and GitHub links
7. **Experience** - Timeline layout for internships and work experience
8. **Certifications** - Grid layout for certificates and credentials
9. **Achievements** - Showcase competitive programming and academic awards
10. **Contact** - Contact form with validation and contact information
11. **Footer** - Quick links and social media icons

## 🚀 Quick Start

### 1. Clone or Download

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Customize Your Data

Open `js/data.js` and update all the information:

```javascript
const portfolioData = {
  personal: {
    name: "Your Name",              // ✏️ Change this
    title: "Junior Software Engineer",
    email: "your.email@example.com", // ✏️ Change this
    phone: "+880 1XXX-XXXXXX",       // ✏️ Change this
    location: "Dhaka, Bangladesh",
    // ... update all fields
  },
  education: [...],  // ✏️ Update with your education
  skills: {...},     // ✏️ Update with your skills
  projects: [...],   // ✏️ Add your projects
  experience: [...], // ✏️ Add your experience
  // ... and more
};
```

### 3. Add Your Images

Add the following images to the `assets/images/` directory:

- `profile.jpg` - Your profile photo (400x400px recommended)
- `about.jpg` - About section image (350x350px recommended)
- `project1.jpg` - Project 1 thumbnail (400x300px recommended)
- `project2.jpg` - Project 2 thumbnail
- `project3.jpg` - Project 3 thumbnail
- `project4.jpg` - Project 4 thumbnail

> **Note:** If you don't add images, placeholder images will be automatically generated.

### 4. Open in Browser

Simply open `index.html` in your web browser:

```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

Or use a local server:

```bash
# Python 3
python -m http.server 8000

# Node.js (with npx http-server)
npx http-server

# VS Code Live Server extension
# Right-click on index.html -> "Open with Live Server"
```

Then visit `http://localhost:8000` in your browser.

## 🎨 Customization Guide

### Changing Colors

The color scheme uses CSS custom properties. Edit `css/style.css`:

```css
:root {
  /* Primary Colors - Change these */
  --color-cyan: #00D9FF;        /* Main cyan color */
  --color-cyan-dark: #0891B2;   /* Darker cyan */
  --color-green: #10B981;       /* Main green */
  --color-green-light: #34D399; /* Lighter green */
  
  /* Background Colors */
  --bg-primary: #1e1e2e;        /* Main background */
  --bg-secondary: #27293d;      /* Card backgrounds */
  --bg-tertiary: #2d2f3f;       /* Tertiary elements */
}
```

### Adding/Removing Sections

To remove a section:
1. Comment out or delete the section in `index.html`
2. Remove the corresponding nav link in the navbar
3. Remove data population code in `js/script.js` if needed

To add a new section:
1. Add the HTML structure following the existing pattern
2. Add styling in `css/style.css`
3. Add data to `js/data.js`
4. Add population logic to `js/script.js`

### Changing Fonts

The portfolio uses Google Fonts. To change fonts, update the link in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Then update the CSS variables:

```css
:root {
  --font-primary: 'YourFont', sans-serif;
  --font-headings: 'YourHeadingFont', sans-serif;
}
```

### Customizing Animations

Adjust animation speeds in CSS:

```css
:root {
  --transition-fast: 0.2s ease;   /* Quick interactions */
  --transition-base: 0.3s ease;   /* Standard transitions */
  --transition-slow: 0.5s ease;   /* Slow, smooth animations */
}
```

To disable animations:
```css
* {
  animation: none !important;
  transition: none !important;
}
```

## 🌐 Deployment

### GitHub Pages

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Go to your repository settings
3. Navigate to "Pages" section
4. Select "main" branch as source
5. Click "Save"
6. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify

1. Create a Netlify account
2. Click "New site from Git"
3. Connect your GitHub repository
4. Leave build settings empty (static site)
5. Click "Deploy site"
6. Your site will be live in minutes!

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. Your site will be deployed!

## 🇧🇩 Bangladesh-Specific Features

### Education Format
- **SSC** (Secondary School Certificate)
- **HSC** (Higher Secondary Certificate)
- **BSc in CSE/SWE** with CGPA out of 4.00
- Board options: Dhaka, Rajshahi, Comilla, Jessore, Chittagong, Sylhet, Dinajpur, Barishal

### Contact Format
- Phone: +880 format
- Location: City, Bangladesh

### Universities
Common universities included:
- BUET, DU, RUET, CUET, KUET
- SUST, DIU, BRAC, NSU, etc.

## 📝 Data Structure Reference

### Personal Information
```javascript
personal: {
  name: "string",
  title: "string",
  tagline: ["string", "string", "string"],
  bio: "string",
  objective: "string",
  email: "string",
  phone: "string",
  location: "string",
  dob: "string",
  profileImage: "path/to/image.jpg",
  resumeLink: "path/or/url",
  social: {
    github: "url",
    linkedin: "url",
    facebook: "url",
    twitter: "url"
  }
}
```

### Education Entry
```javascript
{
  degree: "string",
  institution: "string",
  location: "string",
  duration: "YYYY - YYYY",
  cgpa: "X.XX out of 4.00", // or gpa for HSC/SSC
  group: "Science", // for HSC/SSC
  board: "Dhaka Board", // for HSC/SSC
  logo: "emoji or icon",
  achievements: ["string", "string"]
}
```

### Skill Entry
```javascript
{
  name: "string",
  icon: "fontawesome-class",
  level: 0-100 // percentage
}
```

### Project Entry
```javascript
{
  title: "string",
  description: "string",
  image: "path/to/image.jpg",
  technologies: ["string", "string"],
  github: "url",
  live: "url",
  category: ["frontend", "backend", "fullstack"]
}
```

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties, Grid, Flexbox
- **Vanilla JavaScript** - No dependencies, pure JS
- **Font Awesome 6** - Icons
- **Google Fonts** - Typography (Inter & Poppins)

## 🐛 Troubleshooting

### Images not loading?
- Check file paths in `js/data.js`
- Ensure images are in `assets/images/` directory
- Verify image file names match exactly (case-sensitive)
- Fallback placeholder images will show if images are missing

### Animations not working?
- Check browser console for JavaScript errors
- Ensure `js/data.js` is loaded before `js/script.js`
- Try disabling browser extensions
- Clear browser cache

### Theme toggle not working?
- Check if localStorage is enabled in browser
- Clear localStorage: `localStorage.clear()` in console
- Check browser console for errors

### Mobile menu not closing?
- Ensure JavaScript is enabled
- Check for JavaScript errors in console
- Try clearing browser cache

## 📄 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ IE11 (limited support, some features may not work)

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💖 Support

If you found this helpful, please give it a ⭐️!

## 📧 Contact

For questions or feedback, reach out at [your.email@example.com](mailto:your.email@example.com)

---

**Made with ❤️ by [Your Name](https://github.com/yourusername)**

## 🎓 Tips for Junior Software Engineers

### Before Applying
- [ ] Update all personal information in `js/data.js`
- [ ] Add your real projects with working links
- [ ] Include actual achievements and certifications
- [ ] Use a professional email address
- [ ] Add a professional profile photo
- [ ] Proofread all content for typos
- [ ] Test on multiple devices
- [ ] Ask for feedback from peers

### Resume Tips
- Keep it concise and relevant
- Highlight technical skills
- Include measurable achievements
- Add links to GitHub and LinkedIn
- Update it regularly

### Project Tips
- Include live demos when possible
- Write clear project descriptions
- Mention technologies used
- Highlight your role and contributions
- Keep GitHub repositories organized and documented

---

**Good luck with your job search! 🚀**