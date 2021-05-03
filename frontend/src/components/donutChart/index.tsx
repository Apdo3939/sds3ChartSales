import Chart from 'react-apexcharts';

const DonutChart = () => {
    const mockData = {
        series: [15017, 35000, 11000, 59000, 12360],
        labels: ['Barry Allen','Anakin', 'Julio Verne', 'Elon musk', 'Master chief']
    }

    const options = {
        legend: {
            show: true
        }
    }
    return (
        <div>
            <Chart
                options={{ ...options, labels: mockData.labels }}
                series={mockData.series}
                type="donut"
                height="240"
            />
        </div>
    );
}

export default DonutChart;