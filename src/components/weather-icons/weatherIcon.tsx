import React from 'react';

interface WeatherIconProps {
	wmoCode: number;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ wmoCode }) => {
	const getIcon = (code: number) => {
		if (code === 0) return <img src='/public/weather-icons/clear-day.svg' />; // Clear sky
		if (code >= 1 && code <= 3)
			return <img src='/public/weather-icons/partly-cloudy-day.svg' />; // Partly cloudy to overcast
		if (code === 5) return <img src='/public/weather-icons/haze-day.svg' />; // Haze
		if (code >= 10 && code <= 12)
			return <img src='/public/weather-icons/mist.svg' />; // Mist
		if (code >= 40 && code <= 48)
			return <img src='/public/weather-icons/fog-day.svg' />; // Fog
		if (code >= 50 && code <= 59)
			return <img src='/public/weather-icons/drizzle.svg' />; // Light Rain
		if (code >= 60 && code <= 69)
			return <img src='/public/weather-icons/rain.svg' />; // Rain
		if (code >= 70 && code <= 79)
			return <img src='/public/weather-icons/partly-cloudy-day-snow.svg' />; // Snow
		if (code >= 80 && code <= 82)
			return <img src='/public/weather-icons/drizzle.svg' />; // Rain
		if (code >= 95 && code <= 99)
			return <img src='/public/weather-icons/thunderstorms-rain.svg' />; // Thunderstorms
		console.warn(`No icon found for WMO code: ${code}`);
		return <img width='180px' src='/public/confused-penguin.gif' />; // Fallback icon
	};

	return <div>{getIcon(wmoCode)}</div>;
};

export default WeatherIcon;
