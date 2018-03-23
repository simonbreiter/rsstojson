import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react'
import centered from '@storybook/addon-centered'
import { checkA11y } from '@storybook/addon-a11y'

// Load Atoms
import Button from '../src/components/atoms/Button'
import Title from '../src/components/atoms/Title'
import Text from '../src/components/atoms/Text'
import SmallText from '../src/components/atoms/SmallText'
import SuccessText from '../src/components/atoms/SuccessText'
import ErrorText from '../src/components/atoms/ErrorText'
import TreeView from '../src/components/atoms/TreeView'
import TextInput from '../src/components/atoms/TextInput'
import Loader from '../src/components/atoms/Loader'

// Load Compounds
import SearchPanel from '../src/components/compounds/SearchPanel'

// Load Layouts
import Center from '../src/components/layout/Center'

// Load Views
import Index from '../src/components/views/Index'
import About from '../src/components/views/About'

storiesOf('Atoms', module)
  .addDecorator(checkA11y)
  .addDecorator(centered)
  .add('Loader', () => <Loader />)
  .add('TextInput', () => <TextInput />)
  .add('TreeView', () => <TreeView />)

storiesOf('Atoms/Buttons', module)
  .addDecorator(checkA11y)
  .addDecorator(centered)
  .add('Button with short Text', () => <Button>Short text</Button>)
  .add('Button with long Text', () => (
    <Button>Button that has a very long text</Button>
  ))

storiesOf('Atoms/Typography', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(centered)
  .add('Title', () => <Title>Foo Bar</Title>)
  .add('Text', () => {
    const t = text(
      'Text',
      'Amet totam sapiente quos eaque delectus voluptatum aspernatur Magnam suscipit asperiores sint optio quia Debitis suscipit ex voluptates doloremque aperiam Maxime facere magni saepe asperiores esse minus quia!'
    )
    const content = `${t}`
    return <Text>{content}</Text>
  })
  .add('Small text', () => (
    <SmallText>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </SmallText>
  ))
  .add('Success text', () => (
    <SuccessText>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </SuccessText>
  ))
  .add('Error text', () => (
    <ErrorText>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </ErrorText>
  ))

storiesOf('Compounds', module)
  .addDecorator(checkA11y)
  .add('SearchPanel', () => <SearchPanel />)

storiesOf('Views', module)
  .addDecorator(checkA11y)
  .add('Index', () => <Index />)
  .add('About', () => <About />)
