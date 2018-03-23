import React from 'react'
import styled from 'styled-components'

const Logo = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 5rem;
  height: 5rem;
  fill-rule: evenodd;
  clip-rule: evenodd;
  stroke-linejoin: round;
  stroke-miterlimit: 1.41421;

  #triangle {
    border: 1px solid white;
  }

  #p1,
  #p2,
  #p3,
  #p4,
  #p5,
  #p6 {
    fill: none;
    stroke: #fff;
    stroke-width: 1.5px;
  }

  svg:hover g path {
    animation: pulse 0.3s;
    animation-timing-function: cubic-bezier(0.75, -0.25, 0.2, 1.25);
  }

  svg #p3 {
    animation-delay: 0s;
  }

  svg #p2,
  svg #p4 {
    animation-delay: 0.05s;
  }

  svg #p1 {
    animation-delay: 0.1s;
  }

  svg #p5,
  svg #p7 {
    animation-delay: 0.15s;
  }

  svg #p6 {
    animation-delay: 0.2s;
  }

  @keyframes pulse {
    0% {
      fill: #000;
    }
    50% {
      fill: #fff;
    }
    100% {
      fill: #000;
    }
  }
`

const GitlabLogo = props => (
  <Logo>
    <a href={props.href}>
      <svg width='100%' height='100%' viewBox='0 0 81 81'>
        <path id='triangle' d='M0,0l80.769,0l0,80.769l-80.769,-80.769Z' />
        <g id='logo'>
          <path
            id='p1'
            d='M57.078,37.362l5.269,-16.218l-10.538,0l5.269,16.218Z'
          />
          <path
            id='p2'
            d='M57.078,37.362l-5.269,-16.218l-7.385,0l12.654,16.218Z'
          />
          <path
            id='p3'
            d='M44.424,21.144l-1.602,4.929c-0.146,0.449 0.014,0.942 0.397,1.219l13.859,10.07l-12.654,-16.218Z'
          />
          <path
            id='p4'
            d='M44.424,21.144l7.385,0l-3.174,-9.767c-0.163,-0.503 -0.874,-0.503 -1.038,0l-3.173,9.767Z'
          />
          <path
            id='p5'
            d='M57.078,37.362l5.269,-16.218l7.385,0l-12.654,16.218Z'
          />
          <path
            id='p6'
            d='M69.732,21.144l1.601,4.929c0.146,0.449 -0.014,0.942 -0.396,1.219l-13.859,10.07l12.654,-16.218Z'
          />
          <path
            id='p6'
            d='M69.732,21.144l-7.385,0l3.174,-9.767c0.163,-0.503 0.874,-0.503 1.037,0l3.174,9.767Z'
          />
        </g>
      </svg>
    </a>
  </Logo>
)

export default GitlabLogo
