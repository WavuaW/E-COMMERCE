import styled from "styled-components";
import { categories } from "../data";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const Title = styled.h1`
`;
const Info = styled.div`
`;
const Button = styled.button`
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
       <Image src={item.img}/>
       <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
       </Info>
    </Container>
  )
}

export default CategoryItem
