import Button from "../components/Button";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";


function Prueba() {
    return(
        <>
            <Nav>
                <Link to="/">
                    <Button/>
                </Link>
            </Nav>
        </>
    )
    
}

export default Prueba;