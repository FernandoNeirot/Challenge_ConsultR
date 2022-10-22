import React from 'react'
import { Container, Label, Value, Load } from './Loader.styled'


const Loader = ({label, value}) => {
  
  return (
    <Container>
      <Label>{label}</Label>
      <Value>{value}</Value>      
      <Load value={value}/>
    </Container>
  )
}

export default Loader