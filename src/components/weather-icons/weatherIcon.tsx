import React from 'react';

interface WeatherIconProps {
	wmoCode: number;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ wmoCode }) => {
	const getIcon = (code: number) => {
		if (code === 0) return <img src='/public/weather-icons/clear-day.svg' />; // Clear sky
		if (code >= 1 && code <= 3)
			return <img src='/public/weather-icons/partly-cloudy-day.svg' />; // Partly cloudy to overcast
		if (code >= 45 && code <= 48)
			return <img src='/public/weather-icons/fog-day.svg' />; // Fog
		if (code >= 51 && code <= 67)
			return <img src='/public/weather-icons/rain.svg' />; // Rain
		if (code >= 71 && code <= 77)
			return <img src='/public/weather-icons/partly-cloudy-day-snow.svg' />; // Snow
		if (code >= 95 && code <= 99)
			return <img src='/public/weather-icons/thunderstorms-rain.svg' />; // Thunderstorms
		return <img src='/public/weather-icons/' />; // Default icon
	};

	return <div>{getIcon(wmoCode)}</div>;
};

export default WeatherIcon;
