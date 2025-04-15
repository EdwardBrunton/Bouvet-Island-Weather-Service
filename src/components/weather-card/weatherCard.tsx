import React, { CSSProperties } from 'react';
import WeatherIcon from '../weather-icons/weatherIcon';

interface WeatherCardProps {
	day: Date;
	temperature: number;
	wmoCode: number;
	style?: CSSProperties; // Allow passing a style prop
}

const WeatherCard: React.FC<WeatherCardProps> = ({
	day,
	temperature,
	wmoCode,
	style,
}) => {
	return (
		<div
			style={{
				border: '1px solid #ccc',
				padding: '16px',
				borderRadius: '8px',
				textAlign: 'center',
				...style, // Merge custom styles with default styles
			}}
		>
			<div>{day?.toLocaleDateString(undefined, { weekday: 'long' })}</div>
			<WeatherIcon wmoCode={wmoCode} />
			<div>{temperature}°C</div>
		</div>
	);
};

export default WeatherCard;
