import styled from "styled-components";

const Container = styled.div`
    height: 60px;
`
const Header = styled.h2`
    font-size: 50px;
`

const TrustedStartups = () => {
    return (
        <Container>
            <Header>Trusted by leading startups.</Header>
        </Container>
    );
};

export default TrustedStartups;