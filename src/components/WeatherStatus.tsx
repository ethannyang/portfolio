'use client';

import { useState, useEffect } from 'react';
import { fetchWeatherData, type WeatherData } from '@/utils/weather';
import { siteConfig } from '@/config/site';

export default function WeatherStatus() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const data = await fetchWeatherData();
        setWeather(data);
      } catch (error) {
        console.error('Failed to fetch weather:', error);
        // Fallback data
        const now = new Date();
        setWeather({
          temperature: 81,
          condition: 'clear',
          isDaytime: now.getHours() >= 6 && now.getHours() <= 18,
          location: siteConfig.location
        });
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, []);

  if (loading) {
    return (
      <div className="text-sm text-gray-500 dark:text-gray-400 animate-pulse">
        Loading weather...
      </div>
    );
  }

  if (!weather) {
    return null;
  }

  const timeStatus = weather.isDaytime ? 'daytime' : 'nighttime';
  const weatherEmoji = weather.condition === 'clear' || weather.condition === 'sunny' ? '☀️' : 
                       weather.condition === 'cloudy' ? '☁️' : '⛅';

  return (
    <div className="text-sm text-gray-500 dark:text-gray-400">
      {weatherEmoji} it&apos;s {timeStatus} and {weather.temperature}° fahrenheit in {weather.location}
    </div>
  );
}
