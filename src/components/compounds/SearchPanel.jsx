import React from 'react'
import styled from 'styled-components'
import TextInput from '../atoms/TextInput'
import Button from '../atoms/Button'

const Form = styled.form`
  display: flex;
  margin: 1rem 0;
`

const LeftCol = styled.div`
  width: 100%;
`

const RightCol = styled.div`
  margin-left: 1rem;
`

const SearchPanel = props => (
  <Form onSubmit={props.handleSubmit}>
    <LeftCol>
      <TextInput handleChange={props.handleChange} value={props.value} />
    </LeftCol>
    <RightCol>
      <Button handleClick={props.handleClick}>Convert</Button>
    </RightCol>
  </Form>
)

export default SearchPanel
