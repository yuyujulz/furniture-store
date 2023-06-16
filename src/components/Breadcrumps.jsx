import { Link, useLocation } from 'react-router-dom'
import "../index.scss";

function Breadcrumbs() {
    const location = useLocation();

    return (
    <nav>
    <Link to="/"
        className={location.pathname === "/" ? "breadcrumb-active" : "breadcrumb-not-active"}
    >
        Home
        </Link>
        <span className="breadcrumb-arrow">&gt;</span>
    <Link to="/products"
        className={location.pathname.startsWith("/products") ? "breadcrumb-active" : "breadcrumb-not-active"}
    >
        Products
    </Link>
        <span className="breadcrumb-arrow">&gt;</span>
    <Link to="/products/1"
        className={location.pathname === "/products/1" ? "breadcrumb-active" : "breadcrumb-not-active"}
    >
        Product 1
    </Link>
    </nav>
);
}

export default Breadcrumbs;