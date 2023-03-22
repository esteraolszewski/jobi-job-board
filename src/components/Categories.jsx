import styled from "styled-components";

const Container = styled.div`
    height: 80px;
    margin-bottom: 40px;
`
const Header = styled.h2`
    font-size: 30px;
    color: black;
`

const Categories = () => {
    return (
        <Container>
            <Header>Most Demanding Categories.</Header>
        </Container>
    );
};

export default Categories;