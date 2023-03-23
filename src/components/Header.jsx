import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    margin-top: -100px;
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
    background-color: #94abff;
    width: 97.25px;
    height: 72.48px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    transform: translate(-620px, -55px);
    border-radius: 50%;
`
const BlobB = styled.div`
    background-color: #94abff;
    width: 97.25px;
    height: 72.48px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    transform: translate(620px, -55px);
    border-radius: 50%;

`
const BlobC = styled.div`
    background-color: #94abff;
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
    background-color: #94abff;
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
            <BlobA>Business</BlobA>
            <BlobB>Art</BlobB>
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
        </Container>
          
    )
}

export default Header;