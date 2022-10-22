import React, { useState } from 'react'
import { Container, Item } from './ButtonGroup.styled'
import { heroAPI } from '../../services/heroAPI';
import Modal from '../Modal/Modal';

const ButtonGroup = ({id, name}) => {
  const [data, setData] = useState(null)
  const [open, setOpen] = useState(false)

  const handlePowerstats = () => {
    heroAPI.getPowerstats(id)
      .then(res => {
        setData(res)
        setOpen(true)
      })
      .catch(err => console.error(err))
      .finally(() => {})
  }

  const handleBiography = () => {
    heroAPI.getBiography(id)
      .then(res => {
        setData(res)
        setOpen(true)
      })
      .catch(err => console.error(err))
      .finally(() => {})
  }

  return (
    <Container>
      <Item onClick={() => {}}>Apariencia</Item>
      <Item onClick={handlePowerstats}>estadísticas de energía</Item>
      <Item onClick={handleBiography}>Biografia</Item>
      <Item onClick={() => {}}>Trabajo</Item>
      {open &&
        <Modal
          data={data} 
          open={open}
          setOpen={setOpen}
          name={name}
        />
      }
    </Container>
  )
}

export default ButtonGroup