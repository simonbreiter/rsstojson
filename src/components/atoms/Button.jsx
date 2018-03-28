import React from 'react'
import styled from 'styled-components'

const Submit = styled.div`
  input {
    border: 1px solid black;
    outline: none;
    padding: 0.5rem 1.5rem;
    margin: 0;
    font-size: 0.75rem;
    font-family: 'Roboto', sans-serif;
    border-radius: 0.2rem;
    background-color: white;
    transition: box-shadow 0.2s ease-in-out;
    -webkit-appearance: none;

    &:hover,
    &:focus {
      box-shadow: 0 0 0 1px black;
    }
  }
`

const Button = props => (
  <Submit>
    <input type='submit' value={props.children} />
  </Submit>
)

export default Button
