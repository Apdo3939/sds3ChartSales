import axios from 'axios';
import { ChartData, SaleSum } from 'model/Model';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { BASE_URL } from 'utils/requests';

const DonutChart = () => {

    const [chartData, setChartData] = useState<ChartData>({labels:[], series:[]});

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/amount-by-seller`)
            .then(response => {
                const data = response.data as SaleSum[];
                const myLabels = data.map(d => d.name);
                const mySeries = data.map(d => d.sum);
                setChartData({labels:myLabels,series:mySeries});
            })
            .catch(() => console.log("Error"));
    }, []);


    const options = {
        legend: {
            show: true
        }
    }
    return (
        <div>
            <Chart
                options={{ ...options, labels: chartData.labels }}
                series={chartData.series}
                type="donut"
                height="240"
            />
        </div>
    );
}

export default DonutChart;