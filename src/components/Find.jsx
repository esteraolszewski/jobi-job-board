import styled from "styled-components";
import imgone from "../../src/images/workerOne.jpg";
import imgtwo from "../../src/images/workerTwo.jpg";
import imgthree from "../../src/images/workerThree.jpg";


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
    height: 70%;
    object-fit: cover;
    position: absolute;
    transform: translate(-155px, 105px);
`
const ImageTwo = styled.img`
    width: 40%;
    height: 70%;
    object-fit: cover;
    position: absolute;
    transform: translate(120px, 9px);
`
const ImageThree = styled.img`
    width: 30%;
    height: 40%;
    object-fit: cover;
    position: absolute;
    transform: translate(-140px, -175px);
`
const TextContainer = styled.div`
    width: 25%;
    
`
const Top = styled.p`
    color: grey;
    font-size: 15px;
`
const Header = styled.h2`
    font-size: 60px;
    
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
                    <Circle/>
                    <ImageOne src={imgone}/>
                    <ImageTwo src={imgtwo}/>
                    <ImageThree src={imgthree}/>
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