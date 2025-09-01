export interface WeatherData {
  temperature: number;
  condition: string;
  isDaytime: boolean;
  location: string;
}

export async function fetchWeatherData(): Promise<WeatherData> {
  // Check if API key is available
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const lat = process.env.NEXT_PUBLIC_DEFAULT_LAT || '37.7749';
  const lon = process.env.NEXT_PUBLIC_DEFAULT_LON || '-122.4194';
  
  if (API_KEY && API_KEY !== 'a6dc2812a0bfa34318691754ba702d87') {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      
      const data = await response.json();
      const now = new Date();
      const sunrise = new Date(data.sys.sunrise * 1000);
      const sunset = new Date(data.sys.sunset * 1000);
      
      return {
        temperature: Math.round(data.main.temp),
        condition: data.weather[0].main.toLowerCase(),
        isDaytime: now >= sunrise && now <= sunset,
        location: data.name.toLowerCase()
      };
    } catch (error) {
      console.error('Weather API error:', error);
      // Fall through to mock data
    }
  }
  
  // Mock data for development or when API key is not available
  const now = new Date();
  const isDaytime = now.getHours() >= 6 && now.getHours() <= 18;
  
  return {
    temperature: 81,
    condition: 'sunny',
    isDaytime,
    location: 'san francisco'
  };
}
