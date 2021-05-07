import Footer from "components/footer";
import NavBar from "components/navBar";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4 text-primary">Chart Sales</h1>
                    <p className="lead text-primary">Analise o desempenho das suas vendas por diferentes perspectivas</p>
                    <hr />
                    <p className="text-primary">Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>
                </div>
                <Link to="/dashboard" className="btn btn-primary btn-lg">
                    Acessar o dashBoard
                </Link>
            </div>
            <Footer />
        </>
    );
}

export default Home;