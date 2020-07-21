import React from 'react'

import Header from './components/Header'

const App = () => (
  <Header
    type="filters"
    title={
      <div>title here</div>
    } 
    items={
      <div>actions/filter here</div>
    }
  />
)

export default App