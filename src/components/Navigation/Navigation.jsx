import {Header, Nav, Link} from "./Navigation.styled";

const Navigation = () => {
    return (
        <Header>
            <Nav>
                <Link to="/" end>Home</Link>
                <Link to="/tweets">Tweets</Link>
            </Nav>
        </Header>
    )
}

export default Navigation;