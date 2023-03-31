import styled from "styled-components";
import { Pencil } from "@styled-icons/boxicons-solid/Pencil";
import { Code } from "@styled-icons/entypo/Code";
import { Briefcase } from "@styled-icons/fluentui-system-filled/Briefcase";
import { Phone } from "@styled-icons/boxicons-solid/Phone";
import { Sliders2 } from "@styled-icons/bootstrap/Sliders2";
import { Bank2 } from "@styled-icons/bootstrap/Bank2";
import { KeyboardArrowRight } from "@styled-icons/material/KeyboardArrowRight";


const Container = styled.div`
    margin: 90px;

`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 70px;
`
const Header = styled.h3`
    font-size: 40px;
    color: black;
`
const ExploreBox = styled.div`
    display: flex;
    border-bottom: solid #00BF58 1px;
    line-height: 2;
    cursor: pointer;
`
const Explore = styled.a`
    color: #00BF58;
    transition: all .5s ease-out;
    
    &:hover{
        font-size: 15px;
        transition: all .5s ease-in;
    }
`
const Arrow = styled(KeyboardArrowRight)`
    color: #00BF58;
    width: 20px;
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
    gap: 20px;
    border: 1px lightgray solid;
    border-radius: 30%;
    padding: 10px;
    width: 210px;
    height: 244px;
    cursor: pointer;
    &:hover,
    &:focus {
        border-color: #00BF58;
    }
`
const IconOne = styled(Pencil)`
    width: 30px;
`
const IconTwo = styled(Code)`
    width: 30px;
`
const IconThree = styled(Briefcase)`
    width: 30px;
`
const IconFour = styled(Phone)`
    width: 30px;
`
const IconFive = styled(Sliders2)`
    width: 30px;
`
const IconSix = styled(Bank2)`
    width: 30px;
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
                <ExploreBox>
                    <Explore>Explore all fields</Explore>
                    <Arrow/>
                </ExploreBox>
            </Top>
            <Boxes>
                <Category>
                    <IconOne/>
                    <Name>UI/UX Design</Name>
                    <Number>12k+ Jobs</Number>
                </Category>
                <Category>
                    <IconTwo/>
                    <Name>Development</Name>
                    <Number>8k+ Jobs</Number>
                </Category>
                <Category>
                    <IconThree/>
                    <Name>Marketing</Name>
                    <Number>12k+ Jobs</Number>
                </Category>
                <Category>
                    <IconFour/>
                    <Name>Telemarketing</Name>
                    <Number>3k+ Jobs</Number>
                </Category>
                <Category>
                    <IconFive/>
                    <Name>Editing</Name>
                    <Number>12k+ Jobs</Number>
                </Category>
                <Category>
                    <IconSix/>
                    <Name>Accounting</Name>
                    <Number>17k+ Jobs</Number>
                </Category>
            </Boxes>
        </Container>
    );
};

export default Categories;