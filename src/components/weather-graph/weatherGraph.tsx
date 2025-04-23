import { CSSProperties, useEffect, useMemo, useState } from 'react';
import { HourlyForecast } from '../../useForecastQuery';
import { LineChart } from '@mui/x-charts';

interface WeatherGraphProps {
    hourly?: HourlyForecast[];
    style?: CSSProperties;
}

const WeatherGraph: React.FC<WeatherGraphProps> = ({
    hourly,
    style,
}) => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const { forecast, min, max } = useMemo(() => {
        // filter to only get the hours for the current day
        const now = new Date().toDateString();
        const forecast = hourly?.filter((datum) => datum.time.toDateString() == now);

        // get the min and max temperatures
        const paddingDegrees = 2;
        let min = 0; // default to 0
        let max = -100;
        forecast?.forEach((datum) => {
            min = datum.temperature < min ? datum.temperature : min;
            max = datum.temperature > max ? datum.temperature : max;
        });

        return {
            forecast,
            min: min !== 0 ? min - paddingDegrees : min,
            max: max + paddingDegrees
        };
    }, [hourly]);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        handleResize(); // initialize the dimensions

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div
            style={{
                ...style,
                height: '50vh',
                padding: '2rem 10rem',
            }}
        >
            {forecast && (
                <LineChart
                    xAxis={[
                        {
                            dataKey: 'time',
                            // note: the time is being passed as a number, not a date
                            valueFormatter: (time: Date) => new Date(time).getHours().toString(),
                        }
                    ]}
                    yAxis={[{ min: min, max: max }]}
                    series={[{ dataKey: 'temperature' }]}
                    dataset={forecast}
                    height={height/2}
                    width={width * 0.8}
                />
            )}
        </div>
    );
};

export default WeatherGraph;
