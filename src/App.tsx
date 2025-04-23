import './App.css';
import { useForecastQuery } from './useForecastQuery';
import WeatherCard from './components/weather-card/weatherCard';
import styled from 'styled-components';
import WeatherGraph from './components/weather-graph/weatherGraph';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
    height: 100%;
`;

function App() {
	// coordinates for stavanger
	const latitude = 58.97;
	const longitude = 5.73;

	const forecast = useForecastQuery(latitude, longitude);

	

	return (
		<StyledContainer>
			<h1>Bouvet Island Weather Service</h1>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				{!forecast.isLoading && forecast.data?.daily.map((temp) => (
						<WeatherCard
							style={{ width: '200px', margin: '10px' }}
							day={temp.date}
							wmoCode={temp.weather_code}
							temperature={temp.temperature_2m_max}
						/>
                ))}
			</div>
            <WeatherGraph hourly={forecast.data?.hourly} />
		</StyledContainer>
	);
}

export default App;
