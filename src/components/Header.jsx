import styled from "styled-components";
import logo from "../../src/images/Logo.png";
import img from '../../src/images/headeroption.jpg';
import mobileImg from '../../src/images/mobileheader.jpg';
import { UploadFile } from "@styled-icons/material-outlined/UploadFile";
import "../index.css";
import { desktop, laptop, tabletTwo, tablet, mobileTwo, mobile } from "../responsive";
import { useState } from "react";

const Container = styled.div`
    height: 100vh;
    background-image: url(${img});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    
    @media (max-width: 480px) {
        background-image: url(${mobileImg});
    }
`
// NAVBAR STYLES
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px;
`
const Title = styled.img` 
    
`

const StyledBurger = styled.div`
    display: none;
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 30px;
    right: 30px;
    z-index: 20;
    cursor: pointer;

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => open ? 'white' : '#333'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${({ open }) => open ? "rotate(45deg)" : "rotate(0)"};
        }

        &:nth-child(2) {
            transform: ${({ open }) => open ? "translateX(100%)" : "translateX(0)"};
            opacity: ${({ open }) => open ? "0" : "1"};
        }

        &:nth-child(3) {
            transform: ${({ open }) => open ? "rotate(-45deg)" : "rotate(0)"};
        }
    }

    ${tabletTwo( { display: "flex", justifyContent: "space-around", flexDirection: "column" })}
`

const Center = styled.div`
    display: flex;
    gap: 30px;
    ${tabletTwo( { flexDirection: "column", backgroundColor: "#00BF58", position: "fixed", top: "0", right: "0", height: "100vh", width: "150px", padding: "70px 15px", zIndex: "10" })}

    @media (max-width: 801px) {
        transform: ${({ open }) => open ? "translateX(0)" : "translateX(100%)"};
        transition: transform 0.3s ease-in-out;
    }
`
const MenuItem = styled.a`
    font-size: 17px;
    color: #333333;
    cursor: pointer;
    transition: all .5s ease-out;

    &:hover{
        color: white;
        transition: all .5s ease-in;
    }
`
const Buttons = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    ${tabletTwo( { flexFlow: "column", display: "none" })}

`
const ItemA = styled.a`
    font-size: 17px;
    text-shadow: 0px 4px 6px rgba(0,0,0,0.6);
    color: #ffffff;
    cursor: pointer;
    transition: all .5s ease-out;

    &:hover{
        color: black;
        transition: all .5s ease-in;
    }
`
const ItemB = styled.a`
    font-size: 17px;
    color: white;
    cursor: pointer;
    border-radius: 35px;
    background-color: #00BF58;
    padding: 10px;
    width: 70px;
    text-align: center;
    transition: all .5s ease-out;

    &:hover{
        width: 80px;
        transition: all .5s ease-in;
    }
`
// HEADER STYLES
const HeaderWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`
const Slogan = styled.h1`
    font-size: 85px;
    color: black;
    text-align: center;
    width: 45%;
    margin: -110px 0 4px 0;
    ${laptop( { width: "70%" })}
    ${tabletTwo( { fontSize: "70px"})}
    ${mobileTwo( { fontSize: "50px", color: "white", textShadow: "0px 4px 6px rgba(0,0,0,0.6)" })}
    ${mobile( { fontSize: "40px"})}

`
const Subtitle = styled.h3`
    font-size: 24px;
    font-weight: lighter;
    color: #050C24;
    margin-bottom: 70px;
    text-align: center;
    ${mobileTwo( { fontSize: "20px", color: "white", textShadow: "0px 4px 6px rgba(0,0,0,0.6)"})}
`

const BlobA = styled.div`
    background-color: white;
    width: 97px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    transform: rotate(-20deg);
    border-radius: 50%;
    top: 4em;
    left: 9em;
    font-size: 25px;
    ${desktop( { display: "none" })}

`
const BlobB = styled.div`
    background-color: white;
    width: 85px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    transform: rotate(12deg);
    border-radius: 50%;
    top: 4em;
    right: 9em;
    font-size: 26px;
    ${desktop( { display: "none" })}    
`
const BlobC = styled.div`
    background-color: white;
    width: 78px;
    height: 59px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    transform: rotate(10deg);
    border-radius: 50%;
    top: 12em;
    left: 5em;
    font-size: 23px;
    ${desktop( { display: "none" })}
`
const BlobD = styled.div`
    background-color: white;
    width: 99px;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    transform: rotate(-8deg);
    border-radius: 50%;
    top: 12em;
    right: 5em;
    font-size: 25px;
    ${desktop( { display: "none" })}
`
const MenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    width: 50%;
    height: 50px;
    padding: 20px;
    border-radius: 10px;
    ${desktop( { width: "60%" })}
    ${tabletTwo( { width: "90%" })}
    ${tablet( { flexWrap: "wrap", height: "15%" })}
    ${mobile( { height: "25%" })}
`
const DropdownContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const Label = styled.label`
    color: grey;
    font-size: 15px;
`
const Select = styled.select`
    border: none;
    background: none;
    font-size: 15px;
    cursor: pointer;
`
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
   

`
const Input = styled.input.attrs({type: 'search', value: 'Search'})`
    border: none;
    font-size: 15px;
`

const Button = styled.button`
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    background-color: #00BF58;
    padding: 10px;
    width: 150px;
    height: 50px;
    text-align: center;
    text-transform: uppercase;
    font-size: 15px;
    ${tablet( { marginTop: "15px" })}

`
const CV = styled.div`
    display: flex;
    border-bottom: solid white 1px;
    gap: 6px;
`
const Upload = styled.button`
    border: none;
    background: none;
    font-size: 15px;
    color: white;
    margin-top: 25px;
    padding-bottom: 8px;
    cursor: pointer;
    transition: all .5s ease-out;

    &:hover{
        font-size: 16px;
        transition: all .5s ease-in;
    }
`
const Icon = styled(UploadFile)`
    color: white;
    width: 20px;
    padding: 25px 0 8px;
`

const Header = () => {

    const [open, setOpen] = useState(false)

    return (
        <Container>
             {/* NAVBAR  */}
             <Wrapper>
                <Title src={logo}/>

                <StyledBurger open={open} onClick={() => setOpen(!open)}>
                    <div/>
                    <div/>
                    <div/>
                </StyledBurger>

                <Center open={open}>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Job</MenuItem>
                    <MenuItem>Explore</MenuItem>
                    <MenuItem>Category</MenuItem>
                    <MenuItem>Pages</MenuItem>
                </Center>
                <Buttons>
                    <ItemA>Login</ItemA>
                    <ItemB>Register</ItemB>
                </Buttons>
            </Wrapper>

            {/* HEADER */}
            <HeaderWrapper>
                <BlobA><span className="business">Business</span></BlobA>
                <BlobB><span className="art">Art</span></BlobB>
                <BlobC><span className="design">Design</span></BlobC>
                <BlobD><span className="uidesign">Ui Design</span></BlobD>

                <Slogan>Find your job without any hassle.</Slogan>
                <Subtitle>Jobs & Job search. Find jobs in global. Executive jobs & work.</Subtitle>
                <MenuContainer className="menu">
                    <DropdownContainer>
                            <Label>Job Categories</Label>
                        <Select>
                            <option>Designer</option>
                            <option>Accounting</option>
                            <option>Marketing</option>
                        </Select>
                    </DropdownContainer>
                    <DropdownContainer>
                            <Label>Location</Label>
                        <Select>
                            <option>California, CA</option>
                            <option>London, UK</option>
                            <option>Barcelona, Spain</option>
                        </Select>
                    </DropdownContainer>
                    <InputContainer>
                        <Label>Keywords or Title</Label>
                        <Input/>
                    </InputContainer>
                    <Button>Search</Button>
                </MenuContainer>
                <CV>
                    <Upload>Upload your cv</Upload>
                    <Icon/>
                </CV>
            </HeaderWrapper>
        </Container>
          
    )
}

export default Header;