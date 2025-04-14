import { useQuery } from "@tanstack/react-query";

// forecast from https://open-meteo.com

type Forecast = {
	temperature: number[];
	time: Date;
};

export const useForecastQuery = (latitude: number, longitude: number) => {
	const getForecast = async(): Promise<Forecast> => {
		const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&forecast_days=1`;
		const response = await fetch(url);
		const body = await response.json();
		if (!response.ok) {
			throw new Error("Failed to fetch forecast!");
		}
		return { temperature: body.hourly.temperature_2m, time: body.hourly.time.map((t) => new Date(t)) };
	};

	return useQuery({ queryKey: ['one-day-forecast'], queryFn: getForecast });
};
