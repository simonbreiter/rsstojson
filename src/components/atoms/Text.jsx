import React from 'react'
import styled from 'styled-components'

const P = styled.p`
  font-family: 'Roboto', sans-serif;
  line-height: 1.4;
  font-size: 1rem;
`

const Text = props => <P>{props.children}</P>

export default Text
