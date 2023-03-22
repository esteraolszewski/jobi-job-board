import styled from "styled-components";

const Container = styled.div`
    height: 60px;
    margin-bottom: 40px;
`

const Header = styled.h2`
    font-size: 50px;
    text-align: end;
`

const Find = () => {
    return (
        <Container>
            <Header>Find top talents from jobi.</Header>
        </Container>
    );
};

export default Find;