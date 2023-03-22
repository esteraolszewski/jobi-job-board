import styled from "styled-components";

const Container = styled.div`
    height: 60px;
    margin-bottom: 40px;
`

const Header = styled.h2`
    font-size: 50px;
    text-align: end;
`

const Numbers = () => {
    return (
        <Container>
            <Header>Get the job of your dreams quickly.</Header>
        </Container>
    );
};

export default Numbers;