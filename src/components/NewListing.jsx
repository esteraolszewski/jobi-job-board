import styled from "styled-components";

const Container = styled.div`
    margin: 80px;
    width: 80%;
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    width: 80%;
    border: lightgray 1px solid;
    border-radius: 10px;
`
const Jobs = styled.div`
    display: flex;
    justify-content: space-evenly;
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

`
const Availability = styled.p`
    color: #00BF58;
    font-size: 10px;
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

`
const Location = styled.p`
    font-size: 10px;
    color: grey;
`
const Category = styled.p`
    font-size: 12px;
    font-weight: bold;
`
const Fourth = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 20%;
    border-bottom: lightgray 1px solid;

`
const Icon = styled.div`
    
`
const Button = styled.button`
    color: white;
    background-color: #00BF58;
    padding: 10px;
    height: 50px;
    cursor: pointer;
`
const ClickHere = styled.p`
    background-color: lightgray;
    width: 30%;
    text-align: center;
`

const NewListing = () => {
    return (
        <Container>
            <Top>
                <Header>New job listing</Header>
                <Explore>Explore all jobs ></Explore>
            </Top>
            <Listings>
                <Jobs>
                    <First>
                        <Image></Image>
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
                        <Icon></Icon>
                        <Button>APPLY</Button>
                    </Fourth>
                </Jobs>
                <Jobs>
                    <First>
                        <Image></Image>
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
                        <Icon></Icon>
                        <Button>APPLY</Button>
                    </Fourth>
                </Jobs>
                <Jobs>
                    <First>
                        <Image></Image>
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
                        <Icon></Icon>
                        <Button>APPLY</Button>
                    </Fourth>
                </Jobs>
                <Jobs>
                    <First>
                        <Image></Image>
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
                        <Icon></Icon>
                        <Button>APPLY</Button>
                    </Fourth>
                </Jobs>
                <Jobs>
                    <First>
                        <Image></Image>
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
                        <Icon></Icon>
                        <Button>APPLY</Button>
                    </Fourth>
                </Jobs>
            </Listings>

            <ClickHere>Do you want to post a job for your company? <b>We can help.</b> Click here</ClickHere>
        </Container>
    );
};

export default NewListing;