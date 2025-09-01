# Ethan Yang - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes with persistent storage
- **Dynamic Weather Status**: Real-time weather and time information
- **Modern UI**: Clean, minimalist design with smooth animations
- **SEO Optimized**: Proper metadata, OpenGraph tags, and accessibility features
- **Fast Performance**: Built with Next.js for optimal loading speeds

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Set up weather API:
   - Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)
   - Create a `.env.local` file in the project root:
   ```bash
   NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here
   NEXT_PUBLIC_DEFAULT_LAT=37.7749
   NEXT_PUBLIC_DEFAULT_LON=-122.4194
   ```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and dark mode
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main portfolio page
├── components/
│   ├── ThemeToggle.tsx  # Dark/light mode toggle
│   └── WeatherStatus.tsx # Weather and time display
public/
├── logo.svg            # Custom portfolio logo
└── github.svg          # GitHub icon
```

## Customization

### Personal Information
Update the following files to customize your portfolio:

- `src/app/layout.tsx`: Update metadata (title, description, etc.)
- `src/app/page.tsx`: Update personal information, links, and content
- `src/components/WeatherStatus.tsx`: Update location and weather API

### Styling
- `src/app/globals.css`: Customize colors, fonts, and global styles
- `public/logo.svg`: Replace with your own logo

### Links
Update the GitHub and other external links in `src/app/page.tsx`:
- GitHub profile URL
- Competitive Programming Initiative link
- USACO Guide link

## Deployment

The site is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## Future Enhancements

- Blog/Articles section
- Projects showcase page
- Contact form
- GitHub activity feed
- More animations and interactions

## License

MIT License - feel free to use this template for your own portfolio!
