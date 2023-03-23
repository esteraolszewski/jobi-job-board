import styled from "styled-components";

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
    justify-content: center;
    width: 50%;
    background-color: #755146;
    border-radius: 5%;
    position: relative;
`
const Image = styled.div`
    width: 30%;
`
const Text = styled.div`
    width: 30%;
    padding-bottom: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Header = styled.h2`
    font-size: 50px;
    color: white;
`
const Paragraph = styled.p`
    font-size: 20px;
    color: white;
`
const Explore = styled.p`
    font-size: 15px;
    color: white;
    border: white 1px solid;
`
const Freelancer = styled.div`
    background-color: #aafff5;
    width: 190px;
    height: 100px;
    border-radius: 5px;
    position: absolute;
    transform: translate(-70px, 95px);
`
const P = styled.p`
    font-size: 15px;
    color: grey;
    text-align: end;
    padding-right: 20px;
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
`
const Words = styled.p`
    font-size: 20px;
`
const Numbers = () => {
    return (
        <Container>
            <Box>
                <Image></Image>
                <Text>
                    <Header>Get the job of your dreams quickly.</Header>
                    <Paragraph>Commonly used in the graphic, print publishing industries for previewing visual mockups. Limited social discrimination.</Paragraph>

                    {/* Fix Explore */}
                    <Explore>Find your job. Explore all</Explore>
                </Text>
            </Box>
                <Freelancer>
                    <P>Total Freelancer</P>
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