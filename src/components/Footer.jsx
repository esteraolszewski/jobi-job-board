import styled from "styled-components";
import { logo } from "../data";

const Container = styled.div`
    padding: 40px 0 40px 0;
    
`
const Top = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 500px;
    align-items: center;
    border-top: 1px #EBEBEB solid;
    border-bottom: 1px #EBEBEB solid;
    margin: 0 300px 0 300px;
    padding: 40px 0 40px 0;
`
const Left = styled.div`
    display: flex;
    flex-direction: column;
`

const Header = styled.h2`
    font-size: 40px;
`
const Subtitle = styled.p`
    font-size: 20px;
    margin-top: -20px;
`
const Right = styled.div`
    display: flex;
    gap: 20px;
`
const Looking = styled.button`
    border: 1px solid #00BF58;
    border-radius: 5px;
    padding: 20px;
    background: none;
    color: #00BF58;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
`
const Post = styled.button`
    border: 1px solid #00BF58;
    border-radius: 5px;
    padding: 20px;
    background: #00BF58;
    color: white;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
`
const Middle = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 100px 50px 40px 50px;
`
const LogoSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`
const Image = styled.img`
    width: 100px;
`
const Email = styled.a`
    color: #00BF58;
    text-decoration: underline;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
`
const Socials = styled.div`
    
`
const ListOne = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: -15px;
`
const ListTwo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: -15px;
`
const ListThree = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: -15px;
`
const Title = styled.h3`
    font-size: 20px;
    
`
const Word = styled.p`
    font-size: 15px;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 150px;
`
const A = styled.a`
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
`
const Copyright = styled.p`
    font-size: 15px;
`
const Icons = styled.div`
    
`

const Footer = () => {
    return (
        <Container>
            <Top>
                <Left>
                    <Header>Most complete job portal.</Header>
                    <Subtitle>Signup and start find your job or talents.</Subtitle>
                </Left>
                <Right>
                    <Looking>Looking for a job?</Looking>
                    <Post>Post a job</Post>
                </Right>
            </Top>
            <Middle>
                <LogoSection>
                    {logo.map(item => (
                        <Image src={item.src} key={item.id}/>
                    ))}
                    <Email>jobisupport@company.com</Email>
                    <Socials>1 2 3</Socials>
                </LogoSection>
                <ListOne>
                    <Title>Links</Title>
                    <Word>Pricing</Word>
                    <Word>About us</Word>
                    <Word>Careers</Word>
                    <Word>Blog</Word>
                </ListOne>
                <ListTwo>
                    <Title>Products</Title>
                    <Word>Take the tour</Word>
                    <Word>Live chat</Word>
                    <Word>Self-service</Word>
                    <Word>Mobile</Word>
                    <Word>Collaboration</Word>
                    <Word>Reviews</Word>
                </ListTwo>
                <ListThree>
                    <Title>Legal</Title>
                    <Word>Terms of use</Word>
                    <Word>Terms & conditions</Word>
                    <Word>Privacy</Word>
                    <Word>Cookie policy</Word>
                </ListThree>
            </Middle>
            <Bottom>
                <A>Privacy & Terms.            Contact Us</A>
                <Copyright>Copyright @2022 jobi inc.</Copyright>
                <Icons>1 2 3</Icons>
            </Bottom>
        </Container>
    );
};

export default Footer;