import styled from "styled-components";
import logo from "../../src/images/Logo.png";
import { Facebook } from "@styled-icons/boxicons-logos/Facebook";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { PinterestAlt } from "@styled-icons/boxicons-logos/PinterestAlt";
import { desktop, laptop, tabletTwo, tablet, mobileTwo} from "../responsive";


const Container = styled.div`
    padding: 40px 0 40px 0; 
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
`
const Top = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 500px;
    align-items: center;
    border-top: 1px #EBEBEB solid;
    border-bottom: 1px #EBEBEB solid;
    width: 80%;
    padding: 40px 0 40px 0;
    ${desktop( { gap: "100px" })}
    ${laptop( { gap: "20px" })}

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
    justify-content: space-between;
    width: 70%;
    padding: 100px 50px 40px 50px;
   ${mobileTwo( { justifyContent: "center" })}
`
const LogoSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 30%;
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
    ${laptop( { fontSize: "15px" })}
    ${tablet( { fontSize: "12px" })}

`
const Socials = styled.div`
    display: flex;
    gap: 10px;
    
`
const FB = styled(Facebook)`
    color: #D6D6D6;
    width: 20px;
    border: 1.5px solid #D6D6D6;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;

    &:hover{
        color: #00BF58;
        border-color: #00BF58;
    }
`
const Twit = styled(Twitter)`
    color: #D6D6D6;
    width: 20px;
    border: 1.5px solid #D6D6D6;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;

    &:hover{
        color: #00BF58;
        border-color: #00BF58;
    }
`
const IN = styled(Linkedin)`
    color: #D6D6D6;
    width: 20px;
    border: 1.5px solid #D6D6D6;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;

    &:hover{
        color: #00BF58;
        border-color: #00BF58;
    }
`
const ListOne = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: -15px;
    ${mobileTwo( { display: "none" })}

`
const ListTwo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: -15px;
    ${mobileTwo( { display: "none" })}

`
const ListThree = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: -15px;
    ${mobileTwo( { display: "none" })}

`
const Title = styled.h3`
    font-size: 20px;
    
`
const Word = styled.p`
    font-size: 15px;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    ${tabletTwo( { width: "90%" })}
    ${mobileTwo( { flexDirection: "column" })}

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
    display: flex;
    gap: 20px;
`
const FaceBook = styled(Facebook)`
    color: black;
    width: 20px;
`
const Insta = styled(Instagram)`
    color: black;
    width: 20px;
`
const Pin = styled(PinterestAlt)`
    color: black;
    width: 20px;
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
                    <Image src={logo}/>
                   
                    <Email>jobisupport@company.com</Email>
                    <Socials>
                        <FB/>
                        <Twit/>
                        <IN/>
                    </Socials>
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
                <Icons>
                    <FaceBook/>
                    <Insta/>
                    <Pin/>
                </Icons>
            </Bottom>
        </Container>
    );
};

export default Footer;