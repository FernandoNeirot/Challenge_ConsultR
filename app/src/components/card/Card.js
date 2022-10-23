import React, { useEffect, useState } from 'react'
import { GENDERS } from '../../constants/constants'
import { Container, Title, Footer, Item, Icon } from './Card.styled'
import { IoIosEye } from "react-icons/io";
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Modal from '../Modal/Modal';
import { heroAPI } from '../../services/heroAPI';

const Card = ({hero}) => {
  const [activeMenu, setActiveMenu] = useState(false)
  const [open, setOpen] = useState(false)
  const [data, setData] = useState(null)
  const GENDER = GENDERS[hero['appearance']['gender'].toUpperCase()]
  
  const handlePowerstats = () => {
    heroAPI.getPowerstats(hero.id)
      .then(res => {
        setData(res)
        setOpen(true)
      })
      .catch(err => console.error(err))
      .finally(() => {})
  }

  const handleBiography = () => {
    heroAPI.getBiography(hero.id)
      .then(res => {
        setData(res)
        setOpen(true)
      })
      .catch(err => console.error(err))
      .finally(() => {})
  }

  useEffect(() => {
    if(open)
      setActiveMenu(false)
  }, [open])

  return (
    <Container 
      onMouseLeave={() => setActiveMenu(false)} 
      onMouseEnter={() => setActiveMenu(true)} 
      url={hero['images']['md']}
    >
      <Title>{hero['name']}</Title>
      {activeMenu && <ButtonGroup handlePowerstats={handlePowerstats} handleBiography={handleBiography} open={open} setOpen={setOpen} setActiveMenu={setActiveMenu} id={hero.id} name={hero['name']}/>}
      <Footer>
        <Item>Peso: {hero['appearance']['weight'][1]}</Item>
        <Item>Altura: {hero['appearance']['height'][1]}</Item>
        <Item>Genero: <Icon color={GENDER?.COLOR ?? 'black'}>{GENDER?.ICON}</Icon></Item>
        <Item>Color ojos: <Icon color={hero['appearance']['eyeColor'].toLowerCase()}><IoIosEye/></Icon></Item>
      </Footer>
      {open && data &&
        <Modal
          data={data} 
          open={open}
          setOpen={setOpen}
          name={hero['name']}
        />
      }
    </Container>
  )
}

export default Card