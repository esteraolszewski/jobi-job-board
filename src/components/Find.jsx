import styled from "styled-components";
import imgone from "../../src/images/workerOne.jpg";
import imgtwo from "../../src/images/workerTwo.jpg";
import imgthree from "../../src/images/workerThree.jpg";
import { ArrowIosDownward } from "@styled-icons/evaicons-solid/ArrowIosDownward";
import React, { useState } from 'react';


const Container = styled.div`
    padding: 40px 0;

`
const Box = styled.div`
    display: flex;
    justify-content: center;
    gap: 60px;
    margin-bottom: 80px;
`
const ImagesContainer = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
const Circle = styled.div`
    background-color: #F7FAFF;
    width: 450px;
    height: 450px;
    border-radius: 50%;
`
const ImageOne = styled.img`
    width: 40%;
    height: 55%;
    object-fit: cover;
    position: absolute;
    transform: translate(-155px, 105px);
`
const ImageTwo = styled.img`
    width: 40%;
    height: 55%;
    object-fit: cover;
    position: absolute;
    transform: translate(120px, 9px);
`
const ImageThree = styled.img`
    width: 30%;
    height: 35%;
    object-fit: cover;
    position: absolute;
    transform: translate(-140px, -175px);
`
const TextContainer = styled.div`
    width: 22%;
    
`
const Top = styled.p`
    color: grey;
    font-size: 15px;
`
const Header = styled.h2`
    font-size: 60px;
    
`
const One = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: solid 1px lightgrey;
`
const Subtitle = styled.h3`
    font-size: 25px;
`
const DownArrow = styled(ArrowIosDownward)`
    color: black;
    width: 30px;
    cursor: pointer;
    transition: all .5s ease-out;

    &:hover{
        width: 35px;
        transition: all .5s ease-in;
    }
`
const Button = styled.button`
    color: #00BF58;
    border: #00BF58 solid 1.5px;
    border-radius: 5px;
    background: none;
    padding: 10px 25px;
    cursor: pointer;
    margin-top: 60px;
    font-size: 15px;
    font-weight: bold;
`
const Para = styled.p`
    margin-top: 0;
    line-height: 2;
    font-size: 18px;
`

const Find = () => {
    const [toggle, setToggle] = useState(true);
    const handleClick = () => {
        setToggle(!toggle);
    };

    return (
        <Container>
            <Box>
                <ImagesContainer>
                    <Circle/>
                    <ImageOne src={imgone}/>
                    <ImageTwo src={imgtwo}/>
                    <ImageThree src={imgthree}/>
                </ImagesContainer>
                <TextContainer>
                    <Top>Looking for an expert?</Top>
                    <Header>Find top talents from jobi.</Header>
                    <One>
                        <Subtitle>Seamless Search</Subtitle>
                        <DownArrow onClick={handleClick}/>
                    </One>
                    {toggle ?
                        <Para>It only takes 5 minutes. Set-up is smooth and simple, with fully customisable page design to reflect your brand.</Para>  
                        :
                        <></>  
                    }

                    <One>
                        <Subtitle>Hire top talents</Subtitle>
                        <DownArrow/>
                    </One>

                    <Button>Find Talents</Button>
                </TextContainer>
            </Box>
        </Container>
    );
};

export default Find;