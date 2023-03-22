import styled from "styled-components";

const Container = styled.div`
    height: 60px;
    margin-bottom: 40px;
`

const Header = styled.h2`
    font-size: 50px;
`

const NewListing = () => {
    return (
        <Container>
            <Header>New job listing</Header>

        </Container>
    );
};

export default NewListing;