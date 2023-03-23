import styled from "styled-components";

const Container = styled.div`
    margin: 80px;
    width: 80%;
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Header = styled.h2`
    font-size: 50px;
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
    background-color: #00BF58;
    border-radius: 5%;
    width: 40%;
    display: flex;
    flex-direction: column;
`
const ShipBox = styled.div`
    background-color: #755146;
    border-radius: 5%;
    width: 40%;
    height: 50%;
    display: flex;
    flex-direction: column;
`
const ImageOne = styled.div`
    
`
const ImageTwo = styled.div`
    
`
const Title = styled.h3`
    font-size: 30px;
    color: white;
`
const Name = styled.p`
    font-size: 15px;
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
                    <ImageOne>IMG</ImageOne>
                    <Title>"Seattle opera simplifies Performance planning with deski eSignature."</Title>
                    <Name><b>Rashed kabir,</b> Lead Designer</Name>
                </MondayBox>
                <ShipBox>
                    <ImageTwo>IMG</ImageTwo>
                    <Title>"How DocuSign CLM helps Celonis scale its global business."</Title>
                    <Name><b>Mark Joge,</b> Marketing Chief</Name>

                </ShipBox>
            </Boxes>
        </Container>
    );
};

export default TrustedStartups;