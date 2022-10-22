import React, { useEffect, useState } from 'react'
import { Container, Title, ContenedorModal, Header, ButtonClose, Content } from './Modal.styled'
import { AiOutlineClose } from "react-icons/ai";
import Loader from '../Loader/Loader';

const Modal = ({
  data, 
  open = false,
  setOpen, 
  name
}) => {
  const [openModal, setOpenModal] = useState(false)
  console.log(data)
  console.log(Object.entries(data))
  useEffect(() => {
    setOpenModal(true)
    return () => {
      setOpenModal(false)
    }
  }, [open])

  return (
    <Container open={openModal}>
      <ContenedorModal open={openModal}>
        <Header>
          <Title>Hero: {name}</Title>
          {open &&
            <ButtonClose onClick={() => {
              setOpen(false)
              setOpenModal(false)
            }}>
              <AiOutlineClose/>
            </ButtonClose>
          }
        </Header>
        <Content open={open}>
          {
            open && 
            Object.entries(data).map(item =>{
              return (
                <>
                {
                  isNaN(item[1]) ?
                    <div key={item[0]}>{item[0]}: {item[1]}</div> :
                    <Loader label={item[0]} value={item[1]}/>
                }
                </>
              )
              
            })
          }
        </Content>
      </ContenedorModal>
    </Container>
  )
}

export default Modal