# Portfolio Customization Guide

This guide will help you customize the portfolio website for your own use.

## Quick Start

1. **Update Personal Information**: Edit `src/config/site.ts`
2. **Replace Logo**: Replace `public/logo.svg` with your own logo
3. **Update GitHub Links**: Change the GitHub username in the config
4. **Deploy**: Push to GitHub and deploy on Vercel

## Configuration File

The main configuration file is `src/config/site.ts`. Update those values

## Customizing the Design

### Colors and Theme

The site uses Tailwind CSS with a custom color scheme. You can modify colors in:

- `src/app/globals.css`: Global color variables
- `src/app/page.tsx`: Component-specific styling

### Logo

Replace `public/logo.svg` with your own logo. The logo should be:
- SVG format for best quality
- 40x40px viewBox (will scale automatically)
- Use `currentColor` for the stroke/fill to inherit theme colors

### Fonts

The site uses Geist fonts by default. To change fonts:

1. Update the font imports in `src/app/layout.tsx`
2. Modify the font variables in `src/app/globals.css`

## Adding Real Weather Data

To use real weather data instead of mock data:

1. **Get a Free API Key**:
   - Visit [OpenWeatherMap](https://openweathermap.org/)
   - Sign up for a free account
   - Go to your profile → API keys
   - Copy your default API key

2. **Configure Environment Variables**:
   Create a `.env.local` file in your project root:
   ```
   NEXT_PUBLIC_WEATHER_API_KEY= ""
   NEXT_PUBLIC_DEFAULT_LAT=your_latitude
   NEXT_PUBLIC_DEFAULT_LON=your_longitude
   ```

3. **Update Location**:
   - Find your city's coordinates on Google Maps
   - Update the lat/lon values in `.env.local`
   - Update the location name in `src/config/site.ts`

**Free Tier Limits**: 1,000 API calls per day, 60 calls per minute (perfect for portfolio use)

## Adding New Sections

To add new sections to the portfolio:

1. Create new components in `src/components/`
2. Import and use them in `src/app/page.tsx`
3. Add any new configuration to `src/config/site.ts`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The site is a standard Next.js app and can be deployed on:
- Netlify
- Railway
- DigitalOcean App Platform
- Any platform that supports Next.js

## Performance Optimization

The site is already optimized for performance:

- ✅ Static generation
- ✅ Image optimization with Next.js Image
- ✅ Font optimization
- ✅ CSS optimization with Tailwind
- ✅ Minimal JavaScript bundle

## Accessibility

The site includes accessibility features:

- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ High contrast ratios
- ✅ Screen reader friendly

## Future Enhancements

Consider adding these features:

- [ ] Blog section
- [ ] Projects showcase
- [ ] Contact form
- [ ] GitHub activity feed
- [ ] Resume download
- [ ] Analytics integration
- [ ] Newsletter signup


