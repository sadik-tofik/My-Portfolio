# Sadik Tofik - Interactive 3D Portfolio Website

A stunning, interactive portfolio website for Sadik Tofik, Full-Stack Developer & AI Enthusiast. Built with pure HTML5, CSS3, and vanilla JavaScript featuring advanced 3D animations, particle backgrounds, and responsive design.

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
- **3D Flipping Project Cards** - Interactive cards with tilt effects and hover animations
- **Particle Background System** - Dynamic canvas-based particle animation with connection lines
- **3D Rotating Avatar** - CSS 3D transforms with continuous rotation animation
- **Parallax Scrolling** - Smooth parallax effects for enhanced depth
- **Animated Gradients** - Beautiful gradient backgrounds with keyframe animations

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
├── styles.css          # Complete CSS styles with BEM methodology
├── script.js           # All JavaScript functionality
└── README.md           # This documentation
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

1. **Clone or download** the project files
2. **Open `index.html`** in a modern web browser
3. **Customize** the content:
   - Replace placeholder images with your own
   - Update personal information
   - Modify project details
   - Adjust color scheme in CSS variables

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
Add new project cards in the projects section and update the lightbox data in `script.js`:
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
}- Images are loaded from Pexels CDN for fast loading
```

## 🌟 Performance Tips

- CSS animations use `transform` and `opacity` for hardware acceleration
- Intersection Observer reduces unnecessary calculations
- Debounced scroll events prevent performance issues

## 🔧 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you create interesting improvements, consider sharing them!

## 📞 Support

If you have questions or need help customizing the portfolio, feel free to reach out or create an issue in the repository.

---

**Built with ❤️ using vanilla web technologies**