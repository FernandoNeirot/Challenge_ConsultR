import React, { useEffect, useState } from 'react'
import { Container, Item } from './ButtonGroup.styled'
import { heroAPI } from '../../services/heroAPI';
import Modal from '../Modal/Modal';

const ButtonGroup = ({id, name, setActiveMenu, open, setOpen, data, setData, handlePowerstats, handleBiography}) => {
  
  
  
  
  return (
    <Container>
      <Item onClick={() => {}}>Apariencia</Item>
      <Item onClick={handlePowerstats}>estadísticas de energía</Item>
      <Item onClick={handleBiography}>Biografia</Item>
      <Item onClick={() => {}}>Trabajo</Item>
      
    </Container>
  )
}

export default ButtonGroup