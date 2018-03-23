import React from 'react'
import styled from 'styled-components'
import { mainColor } from '../../util/style'

const Input = styled.input`
  border: none;
  border-bottom: 1px solid black;
  padding: 0.5rem 1rem 0.5rem 0;
  font-size: 1rem;
  font-family: sans-serif;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: box-shadow 0.2s ease-in-out;

  &:hover,
  &:focus {
    box-shadow: 0 1px 0 0 black;
  }
`

const TextInput = props => (
  <Input onChange={props.handleChange} value={props.value} />
)

export default TextInput
