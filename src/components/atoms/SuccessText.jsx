import React from 'react'
import styled from 'styled-components'

const Paragraph = styled.p`
  font-family: 'Roboto', sans-serif;
  line-height: 1.2;
  font-size: 0.75rem;
  padding: 1rem;
  border-radius: 0.2rem;
  color: #1d5741;
  border: 1px solid #c5e6cb;
  background-color: #d6edda;

  a {
    color: #1d5741;
  }
`

const SuccessText = props => (
  <Paragraph style={{ backgroundColor: props.backgroundColor }}>
    {props.children}
  </Paragraph>
)

export default SuccessText
