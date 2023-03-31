import styled from "styled-components";
import img from "../../src/images/personlaptop.jpg";
import { KeyboardArrowRight } from "@styled-icons/material/KeyboardArrowRight";
import "../index.css";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`
const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 50%;
    background-color: #755146;
    border-radius: 5%;
    position: relative;
`

const Image = styled.img`
    width: 35%;
    object-fit: cover;
    
    
`
const Text = styled.div`
    width: 39%;
    padding-bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const Header = styled.h2`
    font-size: 50px;
    color: white;
    margin-bottom: 4px;
`
const Paragraph = styled.p`
    font-size: 20px;
    color: white;
`
const ExploreBox = styled.div`
    border: white 1px solid;
    width: 90%;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    transition: all .5s ease-out;

    &:hover{
        width: 93%;
        transition: all .5s ease-in;
    }
`
const Explore = styled.p`
    font-size: 15px;
    color: white;
`
const Arrow = styled(KeyboardArrowRight)`
    width: 20px;
    color: white;
`
const Freelancer = styled.div`
    background-color: white;
    width: 190px;
    height: 110px;
    border-radius: 5px;
    position: absolute;
    transform: translate(-110px, 99px);
    box-shadow: 0px 34px 74px -10px rgba(0,0,0,0.30);
`
const P = styled.p`
    font-size: 15px;
    color: grey;
    text-align: end;
    padding-right: 20px;
`
const CircleBox = styled.div`
    display: flex;
    
`
const CircleOne = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #00BF58;
    border: white 4px solid;
`
const CircleTwo = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #00BF58;
    border: white 4px solid;
`
const CircleThree = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #00BF58;
    border: white 4px solid;
    position: absolute;
    left: 85px;
`
const Circles = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #00BF58;
    border: white 4px solid;
    color: white;
    font-size: 25px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`
const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 180px;
    margin: 80px;
    position: relative;

`
const Payout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Number = styled.h3`
    font-size: 50px;
    margin: -2px 0;
`
const Words = styled.p`
    font-size: 20px;
`
const Numbers = () => {
    return (
        <Container>
            <Box>
            
                    <Image src={img}/>
                
                <Text>
                    <Header>Get the job of your dreams quickly.</Header>
                    <Paragraph>Commonly used in the graphic, print publishing industries for previewing visual mockups. Limited social discrimination.</Paragraph>

                    <ExploreBox>
                        <Explore>Find your job. <span className="exploreall">Explore all</span></Explore>
                        <Arrow/>
                    </ExploreBox>
                </Text>
            </Box>
                <Freelancer>
                    <P>Total Freelancer</P>
                    <CircleBox>
                        <CircleOne/>
                        <CircleTwo/>
                        <CircleThree/>
                        <Circles>+</Circles>
                    </CircleBox>
                </Freelancer>
            
            <InfoContainer>
                <Payout>
                    <Number>20million</Number>
                    <Words>Dollar Payout</Words>
                </Payout>
                <Payout>
                    <Number>30k+</Number>
                    <Words>Worldwide Client</Words>
                </Payout>
                <Payout>
                    <Number>13billion</Number>
                    <Words>Dollar Payout</Words>
                </Payout>
            </InfoContainer>
        </Container>
    );
};

export default Numbers;