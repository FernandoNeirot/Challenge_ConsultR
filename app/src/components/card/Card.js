import React from 'react'
import { Container } from './Card.styled'

const Card = ({hero}) => {
    
  return (
    <Container>
      <div>{hero.name}</div>
    </Container>
  )
}

export default Card