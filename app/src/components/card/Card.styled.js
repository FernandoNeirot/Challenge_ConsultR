import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 320px;
  margin: 10px;
  height: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({url}) => url}) ;
  background-size: contain;
  background-repeat: no-repeat;
  border: solid 1px black;
  box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.75);
`

export const Title = styled.h3`
  position: absolute;
  top: -20px;
  display: flex;
  justify-content: center;
  padding: 20px;
  width: calc(100% - 40px);
  color: white;
  background-color: rgba(0,0,0,.7);
`

export const Footer = styled.div`
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;  
  width: calc(100% - 10px);
  padding: 5px;
  color: white;
  background-color: rgba(0,0,0,.7);
`

export const Item = styled.div`
  width: 140px;
  padding: 5px;
  display: flex;
`

export const Icon = styled.div`
  svg {
    color: ${({color}) => color};    
    margin-left: 5px;
    width: 25px;
    height: 20px;
  }
`