import React from 'react'
import styled from 'styled-components'

const Container = styled.div``

const Product = ({item}) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img}/>
      <Info>
        
      </Info>
    </Container>
  )
}

export default Product
