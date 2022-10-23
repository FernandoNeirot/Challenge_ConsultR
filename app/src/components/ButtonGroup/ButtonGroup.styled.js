import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 350px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.75);
`

export const Item = styled.button`
  width: 120px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: ${({disabled}) => disabled ? 'no-drop': 'pointer'};
  font-size: 20px;
  color: white;
  background-color: ${({disabled}) => disabled ? 'rgba(182,182,182,.8)': 'rgba(0,0,0,.8)'};
  padding: 5px;
  :hover {
    box-shadow: ${({disabled}) => !disabled && '4px 2px 5px 0px rgba(255,255,255,0.59)'};
  }
`

export const Icon = styled.div`
  svg {
    color: ${({color}) => color};    
    margin-left: 5px;
    width: 25px;
    height: 20px;
  }
`