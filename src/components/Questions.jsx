import styled from "styled-components";
import "../index.css";
import React, { useState } from 'react';


const Container = styled.div`

`

const Header = styled.h2`
    font-size: 60px;
    text-align: center;
`
const List = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 345px;
    background-color: #EFF6F3;
    border-radius: 10px;
`
const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 20px;
    border-bottom: 1px #EBEBEB solid;
    
`
const Subtitle = styled.h3`
    font-size: 20px;
`
const Open = styled.div`
    background-color: white;
    border-radius: 50%;
    padding: 8px;
    width: 10px;
    height: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    
    &:hover {
        background-color: #00B454;
    }
`
const Para = styled.p`
    padding: 8px 30px;
    font-size: 15px;
    line-height: 2;
`
const CenterIt = styled.div`
    display: flex;
    justify-content: center;
`
const Bottom = styled.p`
    border: 1px solid #00BF58;
    width: 320px;
    text-align: center;
    margin: 50px 0 90px 0;
    padding: 6px 10px;
`

const Questions = () => {
    const [toggle, setToggle] = useState(true);
    const handleClick = () => {
        setToggle(!toggle);
    };
    return (
        <Container>
            <Header>Questions & Answers</Header>
            <List>
                <Box>
                    <Subtitle>How does the free trial work?</Subtitle>
                    <Open onClick={handleClick}>+</Open>
                </Box>
                {toggle ?
                        <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugiat numquam minus enim quidem est qui repudiandae odio nulla atque amet veniam architecto, autem repellendus dolorem similique vel blanditiis ea.</Para>  
                        :
                        <></>  
                    }
                <Box>
                    <Subtitle>How do you find different criteria in your process?</Subtitle>
                    <Open>+</Open>
                </Box>
                <Box>
                    <Subtitle>What do you look for in a founding team?</Subtitle>
                    <Open>+</Open>
                </Box>
                <Box>
                    <Subtitle>Do you recommend Pay as you go or Pre pay?</Subtitle>
                    <Open>+</Open>
                </Box>
                <Box>
                    <Subtitle>What do I get for $0 with my plan?</Subtitle>
                    <Open>+</Open>
                </Box>
            </List>
            <CenterIt>
                <Bottom>Don't find the answer? We can help. <span className="click">Click here</span></Bottom>
            </CenterIt>
        </Container>
    );
};

export default Questions;