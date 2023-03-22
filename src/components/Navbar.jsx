import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 60px;
    margin-bottom: 40px;
`
const Title = styled.h2`
    font-size: 30px;
`

const Navbar = () => {
    return (
        <Container>
            <Title>jobi</Title>
        </Container>
    );
};

export default Navbar;