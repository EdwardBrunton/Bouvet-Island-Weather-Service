import { useQuery } from '@tanstack/react-query';

// forecast from https://open-meteo.com

type Forecast = {
	daily: DailyForecast[];
	hourly: HourlyForecast[];
};

type HourlyForecast = {
	temperature: number;
	time: Date;
};

type DailyForecast = {
	date: Date;
	weather_code: number;
	temperature_2m_max: number;
	temperature_2m_min: number;
};

export const useForecastQuery = (latitude: number, longitude: number) => {
	const getForecast = async (): Promise<Forecast> => {
		const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&forecast_days=7&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin`;
		const response = await fetch(url);
		const body = await response.json();
		if (!response.ok) {
			throw new Error('Failed to fetch forecast!');
		}
		return {
			daily: body.daily.time.map((_: unknown, index: number) => ({
				date: new Date(body.daily.time[index]),
				weather_code: body.daily.weather_code[index],
				temperature_2m_max: body.daily.temperature_2m_max[index],
				temperature_2m_min: body.daily.temperature_2m_min[index],
			})),
			hourly: body.hourly.time.map((time: string, index: number) => ({
				time: new Date(time),
				temperature: body.hourly.temperature_2m[index],
			})),
		};
	};

	return useQuery({ queryKey: ['one-day-forecast'], queryFn: getForecast });
};
