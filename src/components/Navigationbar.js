import {Navbar, Container,Nav} from "react-bootstrap"
import "../style/Landingpage.css"

const Navigationbar = () => {
    return(
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand className="atas" href="/">PAJAR FILM</Navbar.Brand>
                    <Nav>
                        <Nav.Link className="atas" href="#trending">TRENDING</Nav.Link>
                        <Nav.Link className="atas" href="#anime">ANIME</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigationbar