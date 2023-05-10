import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #25262c;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80vh;
  background-color: #1b1c22;
  padding: 20px;
`

export const LeftContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: bold;
  color: #ffffff;
`

export const Image = styled.img``

export const RightContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #25262c;
  border-radius: 10px;
  border: 1px solid #334155;
`
export const ToolsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`
export const Tools = styled.li`
  display: flex;
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 5px;
  color: ${props => props.color};
`

export const TextArea = styled.textarea`
  height: 100%;
  background-color: #25262c;
  border: none;
  border-top: 1px solid #334155;
  width: 100%;
  outline: none;
  font-size: 20px;
  color: #f8fafc;
  padding: 20px;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
`
