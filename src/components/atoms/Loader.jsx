import React from 'react'
import styled from 'styled-components'

const Spinner = styled.div`
  position: relative;
  display: inline block;
  width: 15px;
  height: 15px;
  background-color: white;
  border-radius: 50%;

  &:before {
    position: absolute;
    content: '';
    top: -7.5px;
    left: -7.5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: block;
    border: 5px solid transparent;
    border-top-color: black;
    border-left-color: black;
    animation: spin-around 1s linear infinite;
  }

  @keyframes spin-around {
    0% {
      transform: rotate 0deg;
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const Loader = props => (
  <Spinner>
    <span />
    <span />
    <span />
  </Spinner>
)

export default Loader
