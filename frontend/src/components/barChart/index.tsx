import Chart from "react-apexcharts";

const BarChart = () => {
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    const mockData = {
        labels: {
            categories: ['Barry Allen','Anakin', 'Julio Verne', 'Elon musk', 'Master chief']
        },
        series: [
            {
                name: "% Sucesso",
                data: [11.3, 26.4, 8.3, 44.6, 9.3]
            }
        ]
    };

    return (
        <div>
            <Chart 
                options={{...options, xaxis:mockData.labels}}
                series={mockData.series}
                type="bar"
                height="240"
            />
        </div>
    );
}

export default BarChart;