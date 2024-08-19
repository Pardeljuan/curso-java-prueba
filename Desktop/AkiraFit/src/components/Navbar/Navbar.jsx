import { CartWidgets } from "../CartWidgets/CartWidgets";
import '../../styles/Navbar.scss';

export const Navbar = () => {
    return (
        <nav className="nav-bar">
            <div className="logo">
                <img src="../../../public/akirafit.png" alt="Akira Logo" />
            </div>
            <ul className="nav-links">
                <li>Hombre</li>
                <li>Mujer</li>
                <li>Carrito</li>
            </ul>
            <CartWidgets/>
        </nav>
    )
}

