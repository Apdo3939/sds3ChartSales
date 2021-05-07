import BarChart from "components/barChart";
import DataTable from "components/dataTable";
import DonutChart from "components/donutChart";
import Footer from "components/footer";
import NavBar from "components/navBar";

const DashBoard = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3">Sales Dashboard</h1>
                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-primary text-center py-3">Success Rate %</h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-primary text-center py-3">Success Rate %</h5>
                        <DonutChart />
                    </div>
                </div>
                <div className="py-3">
                    <h5 className="text-primary py-3">List sellers and sales</h5>
                </div>
                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default DashBoard;