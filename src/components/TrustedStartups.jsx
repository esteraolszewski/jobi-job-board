import styled from "styled-components";
import logoOne from "../../src/images/mondaylogo.jpg";
import logoTwo from "../../src/images/bobimage.jpg";
import { ArrowLeft } from "@styled-icons/fluentui-system-regular/ArrowLeft";
import { ArrowRight } from "@styled-icons/fluentui-system-regular/ArrowRight";
import { Star } from "@styled-icons/material/Star";
import { StarOutline } from "@styled-icons/material/StarOutline";
import { laptop, tabletTwo, mobileTwo, mobile } from "../responsive";

const Container = styled.div`
    padding: 40px 0;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Top = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    ${laptop( { justifyContent: "center", marginBottom: "30px" })}
`
const Header = styled.h2`
    font-size: 50px;
`
const Icons = styled.div`
    display: flex;
    gap: 20px;
`
const IconLeft = styled(ArrowLeft)`
    color: #D8D8D8;
    width: 30px;
    cursor: pointer;
    transition: all .5s ease-out;

    &:hover{
        color: black;
        width: 50px;
        transition: all .5s ease-in;
    }
`
const IconRight = styled(ArrowRight)`
    color: #D8D8D8;
    width: 30px;
    cursor: pointer;
    transition: all .5s ease-out;

    &:hover{
        color: black;
        width: 50px;
        transition: all .5s ease-in;
    }
`
const Boxes = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    ${tabletTwo( { flexDirection: "column", alignItems: "center" })}
`
const MondayBox = styled.div`
    background-color: #249F47;
    border-radius: 5%;
    width: 25%;
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    ${tabletTwo({ width: "50%" })}
    ${mobileTwo({ width: "60%" })}

`
const ShipBox = styled.div`
    background-color: #755146;
    border-radius: 5%;
    width: 25%;
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    ${tabletTwo({ width: "50%" })}
    ${mobileTwo({ width: "60%" })}

`
const ImageOne = styled.img`
    width: 45%;
    ${mobile( { width: "80%" })}
    
`
const ImageTwo = styled.img`
    width: 40%;
    ${mobile( { width: "80%" })}
    
`
const Title = styled.h3`
    font-size: 30px;
    color: white;
`
const Name = styled.p`
    font-size: 15px;
    color: white;
    margin-bottom: 33px;
`
const Line = styled.div`
    border-bottom: 1px white solid;
    width: 100%;
`
const RatingContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const BottomA = styled.div`
    
`
const BottomB = styled.div`
    
`
const Rating = styled.p`
    font-size: 20px;
    color: white;
    ${mobile( { fontSize: "15px" })}

`
const Stars = styled.div`
    
`
const One = styled(Star)`
    color: white;
    width: 20px;
    ${mobile( { width: "15px" })}

`
const Five = styled(StarOutline)`
    color: white;
    width: 20px;
    ${mobile( { width: "15px" })}

`

const TrustedStartups = () => {
    return (
        <Container>
            <Top>
                <Header>Trusted by leading startups.</Header>
                <Icons>
                    <IconLeft/>
                    <IconRight/>
                </Icons>
            </Top>
            <Boxes>
                <MondayBox>
                    <ImageOne src={logoOne}/>
                    <Title>"Seattle opera simplifies Performance planning with deski eSignature."</Title>
                    <Name><b>Rashed kabir,</b> Lead Designer</Name>
                    <Line></Line>

                    <RatingContainer>
                        <BottomA>
                            <Rating>4.5 Excellent</Rating>
                        </BottomA>
                        <BottomB>
                            <Stars>
                                <One/>
                                <One/>
                                <One/>
                                <One/>
                                <Five/>
                            </Stars>
                        </BottomB>
                    </RatingContainer>
                </MondayBox>
                <ShipBox>
                    <ImageTwo src={logoTwo}/>

                    <Title>"How DocuSign CLM helps Celonis scale its global business."</Title>
                    <Name><b>Mark Joge,</b> Marketing Chief</Name>
                    <Line></Line>

                    <RatingContainer>
                        <BottomA>
                            <Rating>4.8 Awesome</Rating>
                        </BottomA>
                        <BottomB>
                            <Stars>
                                <One/>
                                <One/>
                                <One/>
                                <One/>
                                <One/>
                            </Stars>
                        </BottomB>
                    </RatingContainer>
                </ShipBox>
            </Boxes>
        </Container>
    );
};

export default TrustedStartups;