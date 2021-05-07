import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { BASE_URL } from "utils/requests";
import {ChartDataBar, round, SaleSuccess} from "model/Model";

const BarChart = () => {

    const [chartData, setChartData] = useState<ChartDataBar>({
        labels: {
            categories: []
        },
        series: [
            {
                name: '',
                data: []
            }
        ]
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/success-by-seller`)
            .then(response => {
                const data = response.data as SaleSuccess[];
                const myLabels = data.map(d => d.name);
                const mySeries = data.map(d => round(100 * d.deals / d.visited, 1));
                setChartData({labels: {
                    categories: myLabels
                },
                series: [
                    {
                        name: '% Success',
                        data: mySeries
                    }
                ]})
            });

    }, []);

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    
    return (
        <div>
            <Chart
                options={{ ...options, xaxis: chartData.labels }}
                series={chartData.series}
                type="bar"
                height="240"
            />
        </div>
    );
}

export default BarChart;