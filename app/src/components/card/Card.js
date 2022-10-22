import React, { useState } from 'react'
import { GENDERS } from '../../constants/constants'
import { Container, Title, Footer, Item, Icon } from './Card.styled'
import { IoIosEye } from "react-icons/io";
import ButtonGroup from '../ButtonGroup/ButtonGroup';

const Card = ({hero}) => {
  const [activeMenu, setActiveMenu] = useState(false)
  const GENDER = GENDERS[hero['appearance']['gender'].toUpperCase()]
  
  return (
    <Container 
      onMouseLeave={() => setActiveMenu(false)} 
      onMouseEnter={() => setActiveMenu(true)} 
      url={hero['images']['md']}
    >
      <Title>{hero['name']}</Title>
      {activeMenu && <ButtonGroup id={hero.id} name={hero['name']}/>}
      <Footer>
        <Item>Peso: {hero['appearance']['weight'][1]}</Item>
        <Item>Altura: {hero['appearance']['height'][1]}</Item>
        <Item>Genero: <Icon color={GENDER.COLOR}>{GENDER.ICON}</Icon></Item>
        <Item>Color ojos: <Icon color={hero['appearance']['eyeColor'].toLowerCase()}><IoIosEye/></Icon></Item>
      </Footer>
    </Container>
  )
}

export default Card