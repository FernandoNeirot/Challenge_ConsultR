import styled from 'styled-components'

export const Container = styled.header`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0px;
  background-color: ${ ({ open }) => open ? ' rgba(0,0,0,0.7)' : ' rgba(0,0,0,0.1)'};
  display: flex;
  align-items: center;
  justify-content: ${ ({ type }) => type };
  z-index: 10000;
  transition: all ease .6s;
`

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${ ({ headerColor }) => headerColor };
`

export const ContenedorModal = styled.div`
  width: ${ ({ open }) => open ? `60%` : '0%'};
  min-height: 100px;
  background-color: #cecece;
  position: relative;
  border-radius: 5px;
  margin-left: 20%;
  box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
  transition: ${({ open }) => open && 'all ease 1s' };
  
  @media (max-width: 768px) {
    width: calc(100% - 15px);
  }
`

export const Content = styled.div`
  padding: 25px;
  width: ${ ({ open }) => open ? 'calc(100% - 50px)' : '0%'};
  max-height: 83vh;
`

export const ButtonClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  color: black;
  transition: .3s ease all;
  border-radius: 5px;
  z-index: 100;
  :hover {
    background: white;
    color: black;
  }
  svg {
    width: 100%;
    height: 100%;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: 22px;
  margin: 20px;
  color: #000;
`