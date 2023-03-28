import styled from "styled-components";
import logo from "../../public/images/Logo.jpg";
import img from '../../public/images/headeroption.jpg';
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
    /* padding: 20px; */
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    color: #333333;
    cursor: pointer;
`
const ItemB = styled.a`
    font-size: 17px;
    color: white;
    cursor: pointer;
    border-radius: 35%;
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
    background-color: white;
    width: 97.25px;
    height: 72.48px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    transform: rotate(-20deg);
    border-radius: 50%;
    top: 300px;
    left: 300px;
`
const BlobB = styled.div`
    background-color: white;
    width: 90.25px;
    height: 61.48px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    transform: rotate(12deg);
    border-radius: 50%;
    top: 300px;
    right: 300px;

`
const BlobC = styled.div`
    background-color: white;
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
    background-color: white;
    width: 97.25px;
    height: 72.48px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    transform: translate(725px, 185px);
    border-radius: 50%;

`
const MenuContainer = styled.div`
    display: flex;
`
const DropdownContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const Label = styled.label`
    color: grey;
`
const Select = styled.select`
    
`
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const Input = styled.input.attrs({type: 'search', value: 'Search'})`
    
`

const Button = styled.button`
   
`
const Upload = styled.button`
    border: none;
    background: none;
    font-size: 15px;
    text-decoration: underline;
    cursor: pointer;
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
                <BlobA><span>Business</span></BlobA>
                <BlobB><span>Art</span></BlobB>
                <BlobC>Design</BlobC>
                <BlobD>Ui Design</BlobD>

                <Slogan>Find your job without any hassle.</Slogan>
                <Subtitle>Jobs & Job search. Find jobs in global. Executive jobs & work.</Subtitle>
                <MenuContainer>
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

                <Upload>Upload your cv</Upload>
            </HeaderWrapper>
        </Container>
          
    )
}

export default Header;