import { styled } from "styled-components"
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined"
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fffafa;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`;

const Wrapper = styled.div`
    height: 100%;
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;  
    align-items: center;
`;
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;

`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
  
`;

const Desc = styled.p``

const Button = styled.button``

const Image = styled.img`
    height: 80%;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image src="https://images.unsplash.com/photo-1603189343302-e603f7add05a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
          </ImgContainer>
          <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Desc>DON'T COMPROMISE ON PRICE! GET FLAT 30% OFF ALL NEW ARRIVALS!!</Desc>
            <Button>SHOP NOW!</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  )
}

export default Slider
