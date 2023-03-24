import styled from "styled-components";

const Container = styled.div`
    
`

const Header = styled.h2`
    font-size: 60px;
    text-align: center;
`
const List = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 345px;
    background-color: #EFF6F3;
    border-radius: 10px;
`
const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 20px;
`
const Subtitle = styled.h3`
    font-size: 20px;
`
const Open = styled.div`
    background-color: white;
    border-radius: 50%;
    padding: 5px;

`
const Bottom = styled.p`
    border: 1px solid #00BF58;
    width: 320px;
    text-align: center;
`

const Questions = () => {
    return (
        <Container>
            <Header>Questions & Answers</Header>
            <List>
                <Box>
                    <Subtitle>How does the free trial work?</Subtitle>
                    <Open>+</Open>
                </Box>
                <Box>
                    <Subtitle>How do you find different criteria in your process?</Subtitle>
                    <Open>+</Open>
                </Box>
                <Box>
                    <Subtitle>What do you look for in a founding team?</Subtitle>
                    <Open>+</Open>
                </Box>
                <Box>
                    <Subtitle>Do you recommend Pay as you go or Pre pay?</Subtitle>
                    <Open>+</Open>
                </Box>
                <Box>
                    <Subtitle>What do I get for $0 with my plan?</Subtitle>
                    <Open>+</Open>
                </Box>
            </List>
            <Bottom>Don't find the answer? We can help. Click here</Bottom>
        </Container>
    );
};

export default Questions;