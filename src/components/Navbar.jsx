import React from "react";
import styled from "styled-components";
import { logo } from "../data";

const Container = styled.div`
    height: 20px;
    margin: 20px;
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Title = styled.img`
   
    
`
const Center = styled.div`
    display: flex;
    gap: 30px;
`
const MenuItem = styled.a`
    font-size: 17px;
    color: #333333;
    cursor: pointer;
`
const Buttons = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`
const ItemA = styled.a`
    font-size: 17px;
    color: #333333;
    cursor: pointer;
`
const ItemB = styled.a`
    font-size: 17px;
    color: white;
    cursor: pointer;
    border-radius: 35%;
    background-color: #00BF58;
    padding: 10px;
    width: 70px;
    text-align: center;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                {logo.map(item => (
                    <Title src={item.src} key={item.id}/>
                ))}
                <Center>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Job</MenuItem>
                    <MenuItem>Explore</MenuItem>
                    <MenuItem>Category</MenuItem>
                    <MenuItem>Pages</MenuItem>
                </Center>
                <Buttons>
                    <ItemA>Login</ItemA>
                    <ItemB>Register</ItemB>
                </Buttons>
            </Wrapper>
        </Container>

    );
};

export default Navbar;