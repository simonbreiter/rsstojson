import React from 'react'
import createReactClass from 'create-react-class'
import SearchPanel from '../compounds/SearchPanel'
import styled from 'styled-components'

import TreeView from '../atoms/TreeView'
import Title from '../atoms/Title'
import View from '../atoms/View'
import Text from '../atoms/Text'
import SmallText from '../atoms/SmallText'
import SuccessText from '../atoms/SuccessText'
import ErrorText from '../atoms/ErrorText'
import Loader from '../atoms/Loader'
import GitlabLogo from '../atoms/GitlabLogo'

import Center from '../layout/Center'

const Footer = styled.footer`
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
`
const initialURL = 'https://news.ycombinator.com/rss'

const Index = createReactClass({
  getInitialState () {
    return {
      url: initialURL,
      data: {},
      loading: false,
      error: {
        state: false,
        text: ''
      }
    }
  },
  get (url) {
    this.setState({ loading: true })
    fetch(`https://rsstojson.com/v1/api?rss_url=${url}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data,
          loading: false,
          error: {
            state: Object.keys(data)[0] === 'error',
            text: data['error']
          }
        })
      })
      .catch(error => console.log(error))
  },
  componentDidMount () {
    this.get(initialURL)
  },
  handleChange (e) {
    this.setState({ url: e.target.value })
  },
  handleClick (e) {
    e.preventDefault()
    this.get(this.state.url)
  },
  render () {
    return (
      <View>
        <GitlabLogo href='https://gitlab.com/simonbreiter/rsstojson' />
        <Title textAlign='left'>RSS to JSON</Title>
        <Text>Converting RSS feeds to JSON as a Service. For example:</Text>
        <SearchPanel
          handleSubmit={this.handleClick}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          value={this.state.url}
        />
        {this.state.error.state === true ? (
          <ErrorText>Error: {this.state.error.text}</ErrorText>
        ) : (
          <SuccessText>
            API Call:{' '}
            <a href={`https://rsstojson.com/v1/api/?rss_url=${this.state.url}`}>
              https://rsstojson.com/v1/api/?rss_url={this.state.url}
            </a>
          </SuccessText>
        )}
        {this.state.loading ? (
          <Center>
            <Loader />
          </Center>
        ) : (
          <TreeView data={this.state.data} />
        )}
        <Footer>
          <SmallText>
            Another thing by{' '}
            <a href='https://simonbreiter.com'>Simon Breiter</a>.
          </SmallText>
        </Footer>
      </View>
    )
  }
})

export default Index
