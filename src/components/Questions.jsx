import styled from "styled-components";

const Container = styled.div`
    height: 60px;
    margin-bottom: 40px;
`

const Header = styled.h2`
    font-size: 60px;
    text-align: center;
`

const Questions = () => {
    return (
        <Container>
            <Header>Questions & Answers</Header>
        </Container>
    );
};

export default Questions;