import React from 'react'
import styled from 'styled-components'
import HorizontalCenter from '../layout/HorizontalCenter'

const MaxWidth = styled.div`
  width: 100%;
  max-width: 40rem;
  padding: 1rem;
`

const View = props => (
  <HorizontalCenter>
    <MaxWidth>{props.children}</MaxWidth>
  </HorizontalCenter>
)

export default View
