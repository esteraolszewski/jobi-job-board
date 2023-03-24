import styled from "styled-components";

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
    cursor: pointer;
`
const Post = styled.button`
    border: 1px solid #00BF58;
    border-radius: 5px;
    padding: 20px;
    background: #00BF58;
    color: white;
    cursor: pointer;
`
const Middle = styled.div`
    display: flex;
    justify-content: space-evenly;
`
const LogoSection = styled.div`
    display: flex;
    flex-direction: column;
`
const Image = styled.img`
    
`
const Email = styled.p`
    color: #00BF58;
    text-decoration: underline;
    font-size: 20px;
    font-weight: bold;
`
const Socials = styled.div`
    
`
const ListOne = styled.div`
    display: flex;
    flex-direction: column;
`
const ListTwo = styled.div`
    display: flex;
    flex-direction: column;
`
const ListThree = styled.div`
    display: flex;
    flex-direction: column;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
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
                    <Image></Image>
                    <Email>jobisupport@company.com</Email>
                    <Socials>1 2 3</Socials>
                </LogoSection>
                <ListOne>

                </ListOne>
                <ListTwo>

                </ListTwo>
                <ListThree>

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