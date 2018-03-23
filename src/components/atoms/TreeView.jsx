import React from 'react'
import ObjectInspector from 'react-inspector'
import styled from 'styled-components'

const List = styled.ol`
  margin: 0;
  padding: 0;
`

const TreeViewWrapper = styled.div`
  overflow: scroll;
  padding: 1rem;
`

const TreeView = props => (
  <TreeViewWrapper>
    <List>
      <ObjectInspector data={props.data} expandLevel={5} />
    </List>
  </TreeViewWrapper>
)

export default TreeView
