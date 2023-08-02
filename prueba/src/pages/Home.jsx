import Button from "../components/Button";
import Nav from "../components/Nav";
import { Link } from "react-router-dom"

function Home() {
    return(
        <>
            <Nav>
                <Link to="/prueba">
                    <Button texto="Ir a otra página"></Button>
                </Link>
            </Nav>
        </>
    )
    
}

export default Home;