import React from 'react'
import styled from 'styled-components'

const Paragraph = styled.p`
  font-family: 'Roboto', sans-serif;
  line-height: 1.2;
  font-size: 0.75rem;
`

const Text = props => <Paragraph>{props.children}</Paragraph>

export default Text
