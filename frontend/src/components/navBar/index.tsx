import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-primary border-bottom shadow-sm">
            <div className="container">
                <nav className="my-2 my-md-0 mr-md-3">
                    <Link to="/">
                        <h1 className="text-light">Sales Chart</h1>
                    </Link>
                </nav>
            </div>
        </div>

    );
}

export default NavBar;

