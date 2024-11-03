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

const Slider = styled.div`
    display: flex;  
    align-items: center;
`;
const ImgContainer = styled.div`
    flex: 1;

`;
const InfoContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    
`;


const Slide = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper>
        <ImgContainer>
          <Image src="https://unsplash.com/photos/woman-in-yellow-tracksuit-standing-on-basketball-court-side-nimElTcTNyY"/>
        </ImgContainer>
        <InfoContainer></InfoContainer>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  )
}

export default Slider
