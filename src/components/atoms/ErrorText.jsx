import React from 'react'
import styled from 'styled-components'

const Paragraph = styled.p`
  font-family: 'Roboto', sans-serif;
  line-height: 1.2;
  font-size: 0.75rem;
  color: #c22123;
  background-color: #feebeb;
  padding: 1rem;
  border-radius: 0.2rem;
  border: 1px solid #fcd7d7;
`

const ErrorText = props => <Paragraph>{props.children}</Paragraph>

export default ErrorText
