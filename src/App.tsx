import './App.css';
import { Input, Table } from '@mui/joy';
import { useForecastQuery } from './useForecastQuery';

function App() {
	// coordinates for stavanger
	const latitude = 58.97;
	const longitude = 5.73;

	const forecast = useForecastQuery(latitude, longitude);

	return (
		<>
			<h1>Bouvet Island Weather Service</h1>
			<Input></Input>
			{!forecast.isLoading && (
				<Table>
					<thead>
						<tr>
							<th>Temperature</th>
						</tr>
					</thead>
					<tbody>
						{forecast.data?.temperature.map((temp) => <tr><td>{temp}</td></tr>)}
					</tbody>
				</Table>
			)}
		</>
	);
}

export default App;
