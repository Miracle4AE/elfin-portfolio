# Elfin Şahin Portfolio

Modern ve profesyonel grafik tasarımcı portfolyosu. Adobe Creative Suite uzmanı Elfin Şahin'in çalışmalarını sergileyen responsive web uygulaması.

## 🚀 Özellikler

### **Core Features**
- ✨ **3D Animated Hero Section** - Mouse tracking ve parallax effects
- 🎨 **Interactive Portfolio** - Filtreleme ve modal detayları
- 📱 **Fully Responsive** - Mobile-first design
- ⚡ **Performance Optimized** - Lazy loading ve memoization
- 🔍 **SEO Optimized** - Meta tags ve structured data
- ♿ **Accessibility** - ARIA labels ve keyboard navigation

### **Technical Features**
- 🎯 **Error Boundaries** - Graceful error handling
- 📊 **Analytics Integration** - Google Analytics tracking
- 🔄 **PWA Support** - Offline functionality
- 🎭 **Advanced Animations** - Framer Motion
- 🖼️ **Image Optimization** - Next.js Image component
- 🌐 **Environment Variables** - Deployment ready

## 🛠️ Teknolojiler

- **Framework:** Next.js 15.4.2 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Deployment:** Vercel (Ready)

## 📦 Kurulum

### Prerequisites
- Node.js 18+ 
- npm veya yarn

### Installation

```bash
# Repository'yi klonla
git clone https://github.com/your-username/elfin-portfolio.git
cd elfin-portfolio

# Dependencies'leri yükle
npm install

# Environment variables'ları ayarla
cp env.example .env.local
# .env.local dosyasını düzenle

# Development server'ı başlat
npm run dev
```

### Environment Variables

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://elfin-portfolio.vercel.app
NEXT_PUBLIC_SITE_NAME="Elfin Şahin Portfolio"

# Contact Form
NEXT_PUBLIC_CONTACT_EMAIL=elfin@example.com
NEXT_PUBLIC_CONTACT_PHONE=+90 555 123 4567

# Social Media Links
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/elfin_sahin
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/elfin-sahin
NEXT_PUBLIC_BEHANCE_URL=https://behance.net/elfin-sahin
NEXT_PUBLIC_DRIBBBLE_URL=https://dribbble.com/elfin-sahin

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-google-verification-code
```

## 🏗️ Proje Yapısı

```
elfin-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── Navigation.tsx      # Navigation bar
│   │   ├── Hero.tsx           # Hero section
│   │   ├── About.tsx          # About section
│   │   ├── Portfolio.tsx      # Portfolio section
│   │   ├── Contact.tsx        # Contact section
│   │   ├── Footer.tsx         # Footer
│   │   ├── Analytics.tsx      # Analytics tracking
│   │   ├── LoadingSkeleton.tsx # Loading states
│   │   └── ErrorBoundary.tsx  # Error handling
│   └── types/                 # TypeScript types
├── public/
│   ├── manifest.json          # PWA manifest
│   ├── sw.js                 # Service worker
│   └── icons/                # App icons
├── next.config.ts            # Next.js config
├── tailwind.config.ts        # Tailwind config
└── package.json
```

## 🎨 Component Overview

### **Navigation**
- Responsive mobile menu
- Smooth scroll navigation
- Keyboard accessibility
- ARIA labels

### **Hero Section**
- 3D mouse tracking effects
- Parallax scrolling
- Floating animations
- CTA buttons

### **About Section**
- Tabbed content (Skills, Services, Certifications)
- Animated skill bars
- Colorful descriptions
- Smooth transitions

### **Portfolio Section**
- Category filtering
- Project cards with hover effects
- Modal project details
- Image optimization

### **Contact Section**
- Form validation
- Loading states
- Error handling
- Social media links

### **Footer**
- Responsive layout
- Social links
- Copyright info
- Quick navigation

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Vercel CLI ile
npm install -g vercel
vercel

# Veya GitHub integration ile
# 1. GitHub'a push
# 2. Vercel'de import et
# 3. Environment variables'ları ayarla
```

### Manual Deployment

```bash
# Build
npm run build

# Start production server
npm start
```

## 📊 Performance

### Lighthouse Scores
- **Performance:** 95+
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

### Optimizations
- ✅ Image optimization
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Memoization
- ✅ Bundle analysis

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint check
npm run type-check   # TypeScript check
```

### Code Quality

```bash
# Pre-commit hooks
npm run lint
npm run type-check

# Performance monitoring
npm run analyze      # Bundle analysis
```

## 🐛 Troubleshooting

### Common Issues

1. **Hydration Errors**
   - Client-only components kullan
   - useEffect ile state management

2. **Image Loading**
   - Next.js Image component kullan
   - Proper alt tags ekle

3. **Performance Issues**
   - React.memo kullan
   - useMemo/useCallback optimize et

## 📈 Analytics

### Google Analytics Events
- Page views
- Scroll depth tracking
- CTA click tracking
- Form submissions
- Error tracking

### Custom Events
```javascript
// CTA Click
gtag('event', 'click', {
  event_category: 'CTA',
  event_action: 'click',
  event_label: '#portfolio'
});
```

## 🔒 Security

### Best Practices
- ✅ Environment variables
- ✅ Input validation
- ✅ XSS protection
- ✅ CSRF protection
- ✅ Content Security Policy

## 📱 PWA Features

### Offline Support
- Service worker caching
- Background sync
- Push notifications
- App-like experience

### Installation
- Add to home screen
- Offline functionality
- Native app feel

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.

## 👤 Author

**Elfin Şahin**
- Portfolio: [elfin-portfolio.vercel.app](https://elfin-portfolio.vercel.app)
- Email: elfin@example.com
- LinkedIn: [linkedin.com/in/elfin-sahin](https://linkedin.com/in/elfin-sahin)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Framer Motion](https://framer.com/motion) - Animations
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Vercel](https://vercel.com/) - Deployment platform

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
