export interface WeatherData {
  temperature: number;
  condition: string;
  isDaytime: boolean;
  location: string;
}

export async function fetchWeatherData(): Promise<WeatherData> {
  // Check if API key is available
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const lat = process.env.NEXT_PUBLIC_DEFAULT_LAT || '37.8715';
  const lon = process.env.NEXT_PUBLIC_DEFAULT_LON || '-122.2730';
  
  // Force location to always be Berkeley
  const FORCED_LOCATION = 'Berkeley';
  
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
  
  // Enhanced mock data for development or when API key is not available
  const now = new Date();
  const hour = now.getHours();
  const isDaytime = hour >= 6 && hour <= 18;
  
  // Generate realistic temperature based on time of day
  let temperature = 75; // Base temperature
  if (hour >= 6 && hour <= 12) {
    temperature = 70 + Math.floor(Math.random() * 15); // Morning: 70-85°F
  } else if (hour >= 13 && hour <= 18) {
    temperature = 80 + Math.floor(Math.random() * 15); // Afternoon: 80-95°F
  } else if (hour >= 19 && hour <= 23) {
    temperature = 65 + Math.floor(Math.random() * 15); // Evening: 65-80°F
  } else {
    temperature = 55 + Math.floor(Math.random() * 15); // Night: 55-70°F
  }
  
  // Generate realistic weather conditions based on time
  let condition = 'clear';
  if (hour >= 6 && hour <= 18) {
    const conditions = ['clear', 'sunny', 'partly cloudy', 'cloudy'];
    condition = conditions[Math.floor(Math.random() * conditions.length)];
  } else {
    const conditions = ['clear', 'cloudy', 'partly cloudy'];
    condition = conditions[Math.floor(Math.random() * conditions.length)];
  }
  
  return {
    temperature,
    condition,
    isDaytime,
    location: FORCED_LOCATION
  };
}
