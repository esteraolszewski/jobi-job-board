import styled from "styled-components";

const Container = styled.div`
    height: 100px;
    margin-bottom: 40px;
`
const Header1 = styled.h1`
    font-size: 80px;
    color: black;
    text-align: center;
`

const Header = () => {
    return (
        <Container>
            <Header1>Find your job without any hassle.</Header1>

        </Container>
    )
}

export default Header;