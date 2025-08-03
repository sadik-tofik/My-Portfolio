# Sadik Tofik -  Portfolio Website

[![Live Demo](https://img.shields.io/badge/View-Live%20Demo-2563eb?style=for-the-badge&logo=netlify&logoColor=white)](https://sadik-tofik-portfolio.netlify.app/)

A stunning, interactive portfolio website for Sadik Tofik, Full-Stack Developer & AI Enthusiast. Built with pure HTML5, CSS3, and vanilla JavaScript featuring advanced 3D animations, particle backgrounds, and responsive design.

🚀 **Latest Update**: Enhanced with an interactive 3D avatar and dynamic education section!

## 👨‍💻 About Sadik Tofik

Computer Science student at Jimma University building practical solutions with JavaScript, Python, and blockchain technologies. Specializing in full-stack development, AI/ML, and blockchain applications.

### 🛠️ Tech Stack
- **Languages**: JavaScript, Python, PHP, HTML/CSS, SQL
- **Frameworks**: Next.js, React, Django, Prisma
- **Blockchain**: Cardano, Smart Contracts
- **AI/ML**: NLP, spaCy, TensorFlow

### 🚀 Featured Projects

1. **MediChain** - Blockchain drug verification system using Cardano
2. **TypeRacer Pro** - Advanced typing speed test with analytics
3. **NLP Text Preprocessor** - Published on ReadyTensor platform
4. **Apple Homepage Clone** - Pixel-perfect recreation
5. **JavaScript Calculator** - Interactive calculator with themes
6. **Hulu Travel Agency** - Full-stack booking platform

## 🚀 Features

### 🎨 Visual Effects
- **Interactive 3D Avatar** - Advanced facial expressions with eye-tracking and dynamic smile effects
- **3D Flipping Project Cards** - Interactive cards with tilt effects and hover animations
- **Particle Background System** - Dynamic canvas-based particle animation with connection lines
- **3D Rotating Avatar** - CSS 3D transforms with continuous rotation animation
- **Parallax Scrolling** - Smooth parallax effects for enhanced depth
- **Animated Gradients** - Beautiful gradient backgrounds with keyframe animations
- **Dynamic Education Timeline** - Interactive timeline with smooth animations and hover effects

### 📱 User Experience
- **Responsive Design** - Mobile-first approach with breakpoints for all devices
- **Smooth Scrolling** - Native smooth scroll with active navigation highlighting
- **Dark/Light Theme Toggle** - Seamless theme switching with localStorage persistence
- **Animated Typing Effect** - Dynamic typing animation in hero section
- **Scroll-triggered Animations** - Elements animate into view using Intersection Observer API

### 🔧 Interactive Elements
- **Radial Progress Bars** - Animated skill bars with shimmer effects
- **Interactive Skill Bubbles** - Expandable bubbles with 3D hover effects
- **Lightbox Gallery** - Modal gallery for project details with smooth animations
- **Floating Label Forms** - Modern form inputs with animated labels
- **Form Validation** - Real-time validation with animated error feedback

### ⚡ Performance
- **Optimized Animations** - Hardware-accelerated CSS animations and transforms
- **Debounced Scroll Events** - Performance-optimized scroll handling
- **Lazy Loading** - Images load only when needed
- **Minimal Dependencies** - Pure vanilla JavaScript with no frameworks

## 🛠️ Technologies Used

- **HTML5** - Semantic markup with modern elements
- **CSS3** - Advanced features including:
  - CSS Grid & Flexbox
  - CSS Variables (Custom Properties)
  - 3D Transforms & Animations
  - Backdrop Filter
  - CSS Gradients
- **Vanilla JavaScript** - Modern ES6+ features:
  - Intersection Observer API
  - Canvas API for particles
  - Local Storage API
  - Form Validation
  - Event Delegation

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML structure
├── styles/             
│   └── styles.css      # Complete CSS styles with BEM methodology
├── js/
│   ├── main.js        # Core JavaScript functionality
│   └──  cursor.js      # Interactive avatar and cursor effects
├── assets/
│   └── cv/            # CV and resume files
├── public/
│   ├── assets/        # Project images and icons
└── README.md          # Project documentation
```

## 🎯 Key Sections

### Hero Section
- Animated typing effect cycling through different roles
- 3D rotating avatar with dual-face animation
- Gradient background with animated grain texture
- Call-to-action buttons with hover effects

### Skills Section
- Animated progress bars with percentage indicators
- Interactive skill bubbles with 3D hover effects
- Responsive grid layout
- Scroll-triggered animations

### Projects Section
- 3D flipping cards with tilt interaction
- Project galleries with lightbox functionality
- Technology tags with gradient styling
- Detailed project information in modal

### Contact Section
- Floating label form inputs
- Real-time form validation
- Animated success/error feedback
- Contact information cards with hover effects

## 🎨 Design System

### Color Palette
- **Primary**: #3b82f6 (Blue)
- **Secondary**: #10b981 (Emerald)
- **Accent**: #f59e0b (Amber)
- **Success**: #059669
- **Warning**: #d97706
- **Error**: #dc2626

### Typography
- **Font Family**: Inter, system fonts
- **Font Weights**: 400, 500, 600, 700
- **Scale**: Responsive typography with CSS clamp()

### Spacing System
- Based on 8px grid system
- CSS custom properties for consistent spacing
- Responsive spacing adjustments

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px - 1024px
- **Large Desktop**: > 1024px

## 🚀 Getting Started

### Option 1: View Live Demo
Visit the deployed version: [https://delicate-pothos-6198eb.netlify.app/](https://sadik-tofik-portfolio.netlify.app/)

### Option 2: Run Locally
1. **Clone the repository**
   ```bash
   git clone https://github.com/sadik-tofik/My-Portfolio.git
   cd My-Portfolio
   ```

2. **Open `index.html`** in a modern web browser
   ```bash
   # Using Python (if installed)
   python -m http.server 8000
   # Then open http://localhost:8000 in your browser
   ```

## ⚙️ Customization

### Changing Colors
Update CSS custom properties in `:root`:
```css
:root {
  --color-primary: #your-color;
  --color-secondary: #your-color;
  /* ... other variables */
}
```

### Adding Projects
Add new project cards in the projects section and update the lightbox data in `js/main.js`:
```javascript
const projectData = {
  yourproject: {
    title: 'Your Project',
    description: 'Project description',
    // ... other properties
  }
};
```

### Modifying Animations
Adjust animation durations and effects in CSS:
```css
.your-element {
  transition: transform 0.3s ease;
  animation: yourAnimation 2s infinite;
}
```

## 🎯 Latest Features

### Interactive Avatar
- **Eye Tracking**: Follows cursor movement with natural eye movements
- **Dynamic Expressions**: Smile intensity changes based on cursor proximity
- **Subtle Animations**: Natural blinking and micro-expressions
- **Responsive Design**: Works seamlessly across all device sizes

### Enhanced Education Section
- **Interactive Timeline**: Beautifully animated education history
- **Coursework Display**: Detailed view of relevant courses
- **Achievements Highlight**: Academic accomplishments with visual indicators
- **Responsive Layout**: Adapts to all screen sizes

## 🚀 Deployment

This portfolio is deployed on Netlify with continuous deployment from the main branch. Any push to the main branch will automatically trigger a new deployment.

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-deploy-id/deploy-status)](https://app.netlify.com/sites/delicate-pothos-6198eb/deploys)

## 📞 Contact

For inquiries or collaboration opportunities, feel free to reach out:

- 🌐 [Portfolio Website](https://delicate-pothos-6198eb.netlify.app/)
- 📧 Email: sadiktofik168@gmail.com
- 💼 LinkedIn: [linkedin.com/in/sadik-tofik](https://linkedin.com/in/sadik-tofik-40788a31a)
- 💻 GitHub: [github.com/sadik-tofik](https://github.com/sadik-tofik)
- 🐦 Twitter: [@sadiktofik](https://twitter.com/sadiktofik)

---

