# Oprix Labs Website

A professional, modern static website for Oprix Labs built with HTML5, CSS3, and Vanilla JavaScript.

## 🚀 Features

- **Fully Responsive**: Mobile-first design that works seamlessly across all devices
- **7 Complete Pages**: Home, About, Services, Process, Portfolio, Blog, and Contact
- **Modern Design**: Clean, professional tech aesthetic with smooth animations
- **Accessible**: Semantic HTML5 with ARIA labels for better accessibility
- **SEO Optimized**: Proper meta tags, heading hierarchy, and structured content
- **Interactive Elements**: Working contact form with validation, mobile menu, smooth scrolling

## 📁 Project Structure

```
OPRIX website 2/
├── index.html          # Homepage
├── about.html          # About page
├── services.html       # Services/Capabilities page
├── process.html        # How We Work page
├── portfolio.html      # Portfolio/Case studies page
├── blog.html           # Blog/Insights page
├── contact.html        # Contact page
├── css/
│   └── styles.css      # Global styles and components
├── js/
│   └── main.js         # JavaScript for interactivity
├── images/             # Image assets (placeholder)
└── assets/             # Icons and other assets (placeholder)
```

## 🎨 Design System

### Color Palette
- **Primary**: Deep Navy (`#0a192f`)
- **Secondary**: Lighter Navy (`#112240`)
- **Accent**: Electric Cyan (`#64ffda`)
- **Background**: Darkest Navy (`#020c1b`)
- **Text**: Slate Gray (`#8892b0`) and Light Slate (`#ccd6f6`)

### Typography
- **Main Font**: Inter (sans-serif)
- **Monospace**: Fira Code

### Components
- Sticky navigation with mobile menu
- Reusable card components
- Consistent button styles
- Form elements with validation
- Footer with social links

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties (CSS variables), Flexbox, Grid
- **JavaScript (ES6+)**: Mobile menu, smooth scrolling, form validation
- **Google Fonts**: Inter and Fira Code

## 📋 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A local web server (optional, but recommended)

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Open `index.html` in your browser, or use a local server

### Using a Local Server (Recommended)

**Python 3:**
```bash
python -m http.server 8000
```

**Node.js (with http-server):**
```bash
npx http-server -p 8000
```

**VS Code:**
Use the "Live Server" extension

Then visit `http://localhost:8000` in your browser.

## 📄 Page Descriptions

### Home (`index.html`)
- Hero section with value proposition
- Service highlights
- Featured projects
- Why choose us section
- Call-to-action

### About (`about.html`)
- Mission and vision statements
- Core values
- Company story
- Team section placeholder

### Services (`services.html`)
- Web Development
- Mobile App Development
- Cloud & DevOps solutions
- Detailed service descriptions with tech stacks

### Process (`process.html`)
- 6-step development workflow
- Discovery → Planning → Design → Development → Testing → Launch
- Timeline visualization

### Portfolio (`portfolio.html`)
- 6 sample projects
- Project descriptions with tech stack tags
- Diverse project types (FinTech, E-Commerce, AI, Healthcare, Fitness, Education)

### Blog (`blog.html`)
- 6 sample blog posts
- Topics covering web dev, React, security, cloud, performance, and AI
- Category tags and publication dates

### Contact (`contact.html`)
- Contact form with client-side validation
- Email, business hours, and social links
- Two-column layout with contact information

## ✨ Features & Functionality

### Navigation
- Fixed header with smooth scrolling
- Mobile hamburger menu
- Active page highlighting

### Forms
- Contact form with validation
- Real-time error messages
- Required field indicators

### Responsive Design
- Mobile-first approach
- Breakpoint at 768px for tablets/mobile
- Flexible grid layouts

## 🔧 Customization

### Updating Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
    --color-primary: #0a192f;
    --color-accent: #64ffda;
    /* ...other variables */
}
```

### Adding Content
- Replace placeholder text with actual company information
- Add real images to the `images/` folder
- Update social media links in the footer

### Extending Functionality
The codebase is structured to easily integrate:
- Backend API for contact form submission
- Content management system
- Analytics tracking
- Additional pages or sections

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Future Enhancements (Phase 2)

This static site is designed to be easily upgraded with:
- React/Next.js conversion for dynamic features
- Interactive service selector
- Project filtering and search
- Multi-step contact form
- Blog with full content management
- User authentication for client portals

## 📝 License

All rights reserved © 2026 Oprix Labs

## 🤝 Contributing

This is a private company website. For inquiries, please use the contact form.

---

**Built with ❤️ by Oprix Labs**
