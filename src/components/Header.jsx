import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    margin-top: -100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`
const Slogan = styled.h1`
    font-size: 84px;
    color: black;
    text-align: center;
    width: 843px;
`
const Subtitle = styled.h2`
    font-size: 20px;
    color: #050C24;
`
const BlobA = styled.div`
    background-color: #94abff;
    width: 97.25px;
    height: 72.48px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    transform: translate(-620px, -55px);
    border-radius: 50%;
`
const BlobB = styled.div`
    background-color: #94abff;
    width: 97.25px;
    height: 72.48px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    transform: translate(620px, -55px);
    border-radius: 50%;

`
const BlobC = styled.div`
    background-color: #94abff;
    width: 97.25px;
    height: 72.48px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    transform: translate(-725px, 185px);
    border-radius: 50%;

`
const BlobD = styled.div`
    background-color: #94abff;
    width: 97.25px;
    height: 72.48px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    transform: translate(725px, 185px);
    border-radius: 50%;

`


const Header = () => {
    return (
        <Container>
            <BlobA>Business</BlobA>
            <BlobB>Art</BlobB>
            <BlobC>Design</BlobC>
            <BlobD>Ui Design</BlobD>

            <Slogan>Find your job without any hassle.</Slogan>
            <Subtitle>Jobs & Job search. Find jobs in global. Executive jobs & work.</Subtitle>
   
        
        </Container>
    )
}

export default Header;