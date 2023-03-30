import styled from "styled-components";
import logo from "../../src/images/Logo.png";
import img from '../../src/images/headeroption.jpg';
import { UploadFile } from "@styled-icons/material-outlined/UploadFile";
import "../index.css";

const Container = styled.div`
    height: 100vh;
    background-image: url(${img});
    background-size: cover;
    display: flex;
    flex-direction: column;
    
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
const Center = styled.div`
    display: flex;
    gap: 30px;
`
const MenuItem = styled.a`
    font-size: 17px;
    color: #333333;
    cursor: pointer;
`
const Buttons = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`
const ItemA = styled.a`
    font-size: 17px;
    text-shadow: 0px 4px 6px rgba(0,0,0,0.6);
    color: #ffffff;
    cursor: pointer;
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
    width: 843px;
    margin: -110px 0 4px 0;
`
const Subtitle = styled.h3`
    font-size: 24px;
    font-weight: lighter;
    color: #050C24;
    margin-bottom: 70px;
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
    top: 300px;
    left: 300px;
    font-size: 25px;
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
    top: 300px;
    right: 300px;
    font-size: 26px;
    
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
    top: 485px;
    left: 230px;
    font-size: 23px;

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
    top: 485px;
    right: 230px;
    font-size: 25px;

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
`
const Icon = styled(UploadFile)`
    color: white;
    width: 20px;
    padding: 25px 0 8px;
`

const Header = () => {
    return (
        <Container>
             {/* NAVBAR  */}
             <Wrapper>
                <Title src={logo}/>
        
                <Center>
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