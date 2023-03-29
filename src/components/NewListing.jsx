import styled from "styled-components";
import "../index.css";


const Container = styled.div`
    padding: 40px 0 40px 0;
    background-color: #F5F5F5;

`
const Top = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 450px;
    margin-bottom: 30px;
`
const Header = styled.h2`
    font-size: 50px;
`
const Explore = styled.a`
    color: #00BF58;
    text-decoration: underline;
    cursor: pointer;
`
const Listings = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 345px;
    border: lightgray 1px solid;
    border-radius: 10px;
`
const Jobs = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
`
const First = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 20%;
    border-bottom: lightgray 1px solid;

`
const Image = styled.div`
    
`
const Name = styled.h3`
    
`
const Second = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    border-bottom: lightgray 1px solid;
    justify-content: center;
`
const Availability = styled.p`
    color: #00BF58;
    font-size: 10px;
    margin-bottom: -10px;
`
const Date = styled.p`
    font-size: 15px;
    color: grey;
`
const Third = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    border-bottom: lightgray 1px solid;
    justify-content: center;
`
const Location = styled.p`
    font-size: 10px;
    color: grey;
    margin-bottom: -6px;

`
const Category = styled.p`
    font-size: 12px;
    font-weight: bold;
`
const Fourth = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 10%;
    border-bottom: lightgray 1px solid;

`
const Icon = styled.div`
    
`
const Button = styled.button`
    color: white;
    background-color: #00BF58;
    border: none;
    padding: 10px;
    height: 40px;
    cursor: pointer;
`
const CenterIt = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
`
const ClickHere = styled.p`
    background-color: lightgray;
    width: 25%;
    text-align: center;
    padding: 6px 10px;
`

const NewListing = () => {
    return (
        <Container>
            <Top>
                <Header>New job listing</Header>
                <Explore>Explore all jobs</Explore>
            </Top>
            <Listings>
                <Jobs>
                    <First>
                        <Image>IMG</Image>
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
                        <Icon>ICON</Icon>
                        <Button>APPLY</Button>
                    </Fourth>
                </Jobs>
                <Jobs>
                    <First>
                        <Image>IMG</Image>
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
                        <Icon>ICON</Icon>
                        <Button>APPLY</Button>
                    </Fourth>
                </Jobs>
                <Jobs>
                    <First>
                        <Image>IMG</Image>
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
                        <Icon>ICON</Icon>
                        <Button>APPLY</Button>
                    </Fourth>
                </Jobs>
                <Jobs>
                    <First>
                        <Image>IMG</Image>
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
                        <Icon>ICON</Icon>
                        <Button>APPLY</Button>
                    </Fourth>
                </Jobs>
                <Jobs>
                    <First>
                        <Image>IMG</Image>
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
                        <Icon>ICON</Icon>
                        <Button>APPLY</Button>
                    </Fourth>
                </Jobs>
            </Listings>
            <CenterIt>
                <ClickHere>Do you want to post a job for your company? <span className="green"><b>We can help.</b> Click here</span></ClickHere>  
            </CenterIt>
        </Container>
    );
};

export default NewListing;