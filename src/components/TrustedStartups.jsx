import styled from "styled-components";
import logoOne from "../../src/images/mondaylogo.jpg";
import logoTwo from "../../src/images/bobimage.jpg";


const Container = styled.div`
    padding: 40px 0;
    margin-bottom: 100px;
    background-color: #F5F5F5;
`
const Top = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 85px;
`
const Header = styled.h2`
    font-size: 50px;
    width: 30%;
`
const Icons = styled.div`
    display: flex;
    gap: 20px;
`
const IconLeft = styled.div`
    
`
const IconRight = styled.div`
    
`
const Boxes = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`
const MondayBox = styled.div`
    background-color: #249F47;
    border-radius: 5%;
    width: 25%;
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const ShipBox = styled.div`
    background-color: #755146;
    border-radius: 5%;
    width: 25%;
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 18px;

`
const ImageOne = styled.img`
    width: 45%;
    
`
const ImageTwo = styled.img`
    width: 40%;
    
`
const Title = styled.h3`
    font-size: 30px;
    color: white;
`
const Name = styled.p`
    font-size: 15px;
    color: white;
    margin-bottom: 33px;
`
const Line = styled.div`
    border-bottom: 1px white solid;
    width: 380px;
`
const RatingContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const BottomA = styled.div`
    
`
const BottomB = styled.div`
    
`
const Rating = styled.p`
    font-size: 20px;
    color: white;
`
const Stars = styled.p`
    font-size: 20px;
    color: white;
`

const TrustedStartups = () => {
    return (
        <Container>
            <Top>
                <Header>Trusted by leading startups.</Header>
                <Icons>
                    <IconLeft>ARROW</IconLeft>
                    <IconRight>ARROW</IconRight>
                </Icons>
            </Top>
            <Boxes>
                <MondayBox>
                    <ImageOne src={logoOne}/>
                    <Title>"Seattle opera simplifies Performance planning with deski eSignature."</Title>
                    <Name><b>Rashed kabir,</b> Lead Designer</Name>
                    <Line></Line>

                    <RatingContainer>
                        <BottomA>
                            <Rating>4.5 Excellent</Rating>
                        </BottomA>
                        <BottomB>
                            <Stars>12345</Stars>
                        </BottomB>
                    </RatingContainer>
                </MondayBox>
                <ShipBox>
                    <ImageTwo src={logoTwo}/>

                    <Title>"How DocuSign CLM helps Celonis scale its global business."</Title>
                    <Name><b>Mark Joge,</b> Marketing Chief</Name>
                    <Line></Line>

                    <RatingContainer>
                        <BottomA>
                            <Rating>4.8 Awesome</Rating>
                        </BottomA>
                        <BottomB>
                            <Stars>12345</Stars>
                        </BottomB>
                    </RatingContainer>
                </ShipBox>
            </Boxes>
        </Container>
    );
};

export default TrustedStartups;