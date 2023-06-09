import styled from "styled-components";
import { PriceTag } from "@styled-icons/remix-line/PriceTag";
import { KeyboardArrowRight } from "@styled-icons/material/KeyboardArrowRight";
import one from "../../src/images/MasterCard_Logo.png";
import two from "../../src/images/google.png";
import three from "../../src/images/slack.png";
import four from "../../src/images/adobe.png";
import five from "../../src/images/picnichealth.png";
import "../index.css";
import { desktopTwo, laptop, tabletTwo, tablet, mobile } from "../responsive";



const Container = styled.div`
    padding: 40px 0 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Top = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    margin-bottom: 30px;

`
const Header = styled.h2`
    font-size: 50px;
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
const Listings = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    border: lightgray 1px solid;
    border-radius: 10px;
    ${desktopTwo( { width: "80%" })}
    ${tabletTwo( { width: "95%" })}

`
const Jobs = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 10px;
`
const First = styled.div`
    display: flex;
    align-items: center;
    gap: 45px;
    width: 25%;
    border-bottom: lightgray 1px solid;
    ${tablet( { flexWrap: "wrap", gap: "0" })}

`
const ImageOne = styled.img`
    width: 20%;
    ${tabletTwo( { width: "50%" })}

`
const ImageTwo = styled.img`
    width: 20%;
    ${tabletTwo( { width: "50%" })}

`
const ImageThree = styled.img`
    width: 22%;
    ${tabletTwo( { width: "50%" })}

`
const ImageFour = styled.img`
    width: 20%;
    ${tabletTwo( { width: "50%" })}

`
const ImageFive = styled.img`
    width: 15%;
    ${tabletTwo( { width: "50%" })}

`
const Name = styled.h3`
    ${mobile( { fontSize: "15px" })}
`
const Second = styled.div`
    display: flex;
    flex-direction: column;
    width: 15%;
    border-bottom: lightgray 1px solid;
    justify-content: center;
    ${mobile( { width: "20%" })}

`
const Availability = styled.p`
    color: #00BF58;
    font-size: 10px;
    margin-bottom: -10px;
    ${mobile( { fontSize: "12px" })}

`
const Date = styled.p`
    font-size: 15px;
    color: grey;
    ${mobile( { fontSize: "15px" })}

`
const Third = styled.div`
    display: flex;
    flex-direction: column;
    width: 15%;
    border-bottom: lightgray 1px solid;
    justify-content: center;
    ${mobile( { width: "20%" })}

`
const Location = styled.p`
    font-size: 10px;
    color: grey;
    margin-bottom: -6px;
    ${mobile( { fontSize: "12px" })}

`
const Category = styled.p`
    font-size: 12px;
    font-weight: bold;
    ${mobile( { fontSize: "15px" })}

`
const Fourth = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    width: 10%;
    border-bottom: lightgray 1px solid;
    ${mobile( { width: "20%" })}

`
const Icon = styled(PriceTag)`
    width: 15px;
    color: lightgrey;
    border: lightgrey 1.8px solid;
    border-radius: 50%;
    padding: 5px;
    cursor: pointer;

    &:hover{
        color: #00BF58;
        border-color : #00BF58;
    }

`
const Button = styled.button`
    color: white;
    background-color: #00BF58;
    border: none;
    padding: 10px;
    height: 40px;
    cursor: pointer;
    ${mobile( { padding: "5px", width: "30px", fontSize: "8px" })}

`
const CenterIt = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    width: 100%;
`
const ClickHere = styled.p`
    background-color: #e1e1e1;
    width: 26%;
    text-align: center;
    padding: 6px 10px;
    ${desktopTwo( { width: "35%" })}
    ${laptop( { width: "50%" })}
    ${mobile( { width: "100%" })}

`

const NewListing = () => {
    return (
        <Container>
            <Top>
                <Header>New job listing</Header>
                <ExploreBox>
                    <Explore>Explore all jobs</Explore>
                    <Arrow/>
                </ExploreBox>

            </Top>
            <Listings>
                <Jobs>
                    <First>
                        <ImageOne src={one}/>
                        <Name>Developer & expert in java c++</Name>
                    </First>
                    <Second>
                        <Availability>Fulltime</Availability>
                        <Date>18 Jul 2018 by <b>slack</b></Date>
                    </Second>
                    <Third>
                        <Location>Spain, Barcelona</Location>
                        <Category>Developer, Coder</Category>
                    </Third>
                    <Fourth>
                        <Icon/>
                        <Button>APPLY</Button>
                    </Fourth>
                </Jobs>
                <Jobs>
                    <First>
                        <ImageTwo src={two}/>
                        <Name>Animator & Expert in maya 3D</Name>
                    </First>
                    <Second>
                        <Availability>Part time</Availability>
                        <Date>18 Jul 2018 by <b>google</b></Date>
                    </Second>
                    <Third>
                        <Location>USA, New York</Location>
                        <Category>Finance, Accounting</Category>
                    </Third>
                    <Fourth>
                        <Icon/>
                        <Button>APPLY</Button>
                    </Fourth>
                </Jobs>
                <Jobs>
                    <First>
                        <ImageThree src={three}/>
                        <Name>Marketing Specialist in SEO & SMM</Name>
                    </First>
                    <Second>
                        <Availability>Part time</Availability>
                        <Date>18 Jul 2018 by <b>pinterest</b></Date>
                    </Second>
                    <Third>
                        <Location>USA, Alaska</Location>
                        <Category>Design, Artist</Category>
                    </Third>
                    <Fourth>
                        <Icon/>
                        <Button>APPLY</Button>
                    </Fourth>
                </Jobs>
                <Jobs>
                    <First>
                        <ImageFour src={four}/>
                        <Name>Developer & expert in java c++</Name>
                    </First>
                    <Second>
                        <Availability>Fulltime</Availability>
                        <Date>18 Jul 2018 by <b>instagram</b></Date>
                    </Second>
                    <Third>
                        <Location>USA, California</Location>
                        <Category>Application, Dev</Category>
                    </Third>
                    <Fourth>
                        <Icon/>
                        <Button>APPLY</Button>
                    </Fourth>
                </Jobs>
                <Jobs>
                    <First>
                        <ImageFive src={five}/>
                        <Name>Lead & Product Designer</Name>
                    </First>
                    <Second>
                        <Availability>Fulltime</Availability>
                        <Date>18 Jul 2018 by <b>linkedin</b></Date>
                    </Second>
                    <Third>
                        <Location>UK, London</Location>
                        <Category>Finance, Business</Category>
                    </Third>
                    <Fourth>
                        <Icon/>
                        <Button>APPLY</Button>
                    </Fourth>
                </Jobs>
            </Listings>
            <CenterIt>
                <ClickHere>Do you want to post a job for your company? <span className="green">We can help.</span> <span className="click">Click here</span></ClickHere>  
            </CenterIt>
        </Container>
    );
};

export default NewListing;