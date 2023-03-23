import styled from "styled-components";

const Container = styled.div`
    margin: 80px;
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Header = styled.h2`
    font-size: 30px;
    color: black;
`
const Explore = styled.a`
    color: #00BF58;
    text-decoration: underline;
    cursor: pointer;
`
const Boxes = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 20px;
`
const Category = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px lightgray solid;
    border-radius: 30%;
    padding: 10px;
    width: 210px;
    height: 244px;
`
const Name = styled.h3`
    font-size: 20px;
`
const Number = styled.p`
    font-size: 15px;
    color: lightgray;
`
const Categories = () => {
    return (
        <Container>
            <Top>
                <Header>Most Demanding Categories.</Header>
                <Explore>Explore all fields</Explore>
            </Top>
            <Boxes>
                <Category>
                    {/* Add icon to each */}
                    <Name>UI/UX Design</Name>
                    <Number>12k+ Jobs</Number>
                </Category>
                <Category>
                    <Name>Development</Name>
                    <Number>8k+ Jobs</Number>
                </Category>
                <Category>
                    <Name>Marketing</Name>
                    <Number>12k+ Jobs</Number>
                </Category>
                <Category>
                    <Name>Telemarketing</Name>
                    <Number>3k+ Jobs</Number>
                </Category>
                <Category>
                    <Name>Editing</Name>
                    <Number>12k+ Jobs</Number>
                </Category>
                <Category>
                    <Name>Accounting</Name>
                    <Number>17k+ Jobs</Number>
                </Category>
            </Boxes>
        </Container>
    );
};

export default Categories;