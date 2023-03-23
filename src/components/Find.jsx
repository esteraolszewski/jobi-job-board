import styled from "styled-components";

const Container = styled.div`
    padding: 40px 0 40px 0;
`
const Box = styled.div`
    display: flex;
    justify-content: center;
    gap: 60px;
`
const ImagesContainer = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Circle = styled.div`
    background-color: #F7FAFF;
    width: 450px;
    height: 450px;
    border-radius: 50%;
`
const TextContainer = styled.div`
    width: 20%;
    
`
const Top = styled.p`
    color: grey;
    font-size: 15px;
`
const Header = styled.h2`
    font-size: 50px;
    
`
const Subtitle = styled.h3`
    font-size: 30px;
`
const Button = styled.button`
    color: #00BF58;
    border: #00BF58 solid 1px;
    border-radius: 5px;
    background: none;
    padding: 10px;
    cursor: pointer;
`

const Find = () => {
    return (
        <Container>
            <Box>
                <ImagesContainer>
                    <Circle></Circle>
                </ImagesContainer>
                <TextContainer>
                    <Top>Looking for an expert?</Top>
                    <Header>Find top talents from jobi.</Header>
                    <Subtitle>Seamless Search</Subtitle>
                    <Subtitle>Hire top talents</Subtitle>
                    <Button>Find Talents</Button>
                </TextContainer>
            </Box>
        </Container>
    );
};

export default Find;