import styled from "styled-components";
import img from "../../src/images/personlaptop.jpg";
import headOne from "../../src/images/headshot1.jpg";
import headTwo from "../../src/images/headshot2.jpg";
import headThree from "../../src/images/headshot3.jpg";
import { KeyboardArrowRight } from "@styled-icons/material/KeyboardArrowRight";
import "../index.css";
import { desktop, laptop, tabletTwo, mobileTwo } from "../responsive";



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
    ${laptop( { width: "70%" })}
    ${tabletTwo( { flexDirection: "column" })}
    ${mobileTwo( { width: "90%", marginTop: "50px" })}

`

const Image = styled.img`
    width: 35%;
    object-fit: cover;
    ${tabletTwo( { width: "50%" })}
    
`
const Text = styled.div`
    width: 39%;
    padding-bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    ${tabletTwo( { width: "80%" })}

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
    padding: 5px 5px 15px 15px;
    ${desktop( { bottom: "30%", left: "50%", marginBottom: "50px" })}
    ${laptop( { bottom: "27%" })}
    ${tabletTwo( { bottom: "37%" })}
    ${mobileTwo( { bottom: "36%" })}

`
const P = styled.p`
    font-size: 15px;
    color: grey;
    text-align: end;
    padding-right: 20px;
`
const CircleBox = styled.div`
    display: flex;
    position: relative;
`
const CircleOne = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: white 5px solid;
    object-fit: cover;
`
const CircleTwo = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: white 5px solid;
    position: absolute;
    left: 40px;
    object-fit: cover;

`
const CircleThree = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: white 5px solid;
    position: absolute;
    left: 80px;
    object-fit: cover;

`
const Circles = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #00BF58;
    border: white 5px solid;
    color: white;
    font-size: 25px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 120px;
    cursor: pointer;
`
const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 180px;
    margin: 80px;
    ${tabletTwo( { flexDirection: "column", gap: "50px" })}
  
`
const Payout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Number = styled.h3`
    font-size: 50px;
    margin: -2px 0;
    ${laptop( { fontSize: "30px" })}
`
const Words = styled.p`
    font-size: 20px;
    ${laptop( { fontSize: "15px" })}

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
                        <CircleOne src={headOne}/>
                        <CircleTwo src={headTwo}/>
                        <CircleThree src={headThree}/>
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