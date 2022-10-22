import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin-top: 5px;
  border: solid 1px black;
  width: 100%;
  display: flex;
  align-items: center;
`

export const Label = styled.div`
  position: absolute;
  left: 10px;
  padding: 5px;
  z-index: 10000;
  background-color: #cecece;
`
export const Value = styled.div`
  position: absolute;
  right: 10px;
  border-radius: 50%;
  background-color: white;
  padding: 5px;
  z-index: 1000;
`
export const Load = styled.div`
  position: relative;
  height: 40px;
  left: 0;
  width: ${({value}) => `${value}%`};
  background-color: blue;
`