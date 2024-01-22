import { Link } from "react-router-dom";

export const NavBar = () => {
    return(
        <div>
            <Link to="/home">Home</Link>
            <Link to="/contact">Contatos</Link>
        </div>
    );
}