import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  font-family: 'Roboto', sans-serif;
  line-height: 1.4;
  margin: 1rem 0;
`

const Title = props => (
  <H1 style={{ textAlign: props.textAlign }}>{props.children}</H1>
)

export default Title
