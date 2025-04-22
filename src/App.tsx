import './App.css';
import { Input, Table } from '@mui/joy';
import { useForecastQuery } from './useForecastQuery';
import WeatherCard from './components/weather-card/weatherCard';
import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

function App() {
	// coordinates for Bouvet Island
	const latitude = -54.392;
	const longitude = 3.355;

	const forecast = useForecastQuery(latitude, longitude);

	

	return (
		<StyledContainer>
			<h1>Bouvet Island Weather Service</h1>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				{!forecast.isLoading &&
					forecast.data?.daily.map((temp) => (
						<WeatherCard
							style={{ width: '200px', margin: '10px' }}
							day={temp.date}
							wmoCode={temp.weather_code}
							temperature={temp.temperature_2m_max}
						/>
					))}
			</div>
		</StyledContainer>
	);
}

export default App;
