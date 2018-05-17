import React, { Component } from 'react'
import './App.css'

import Main from './components/Main'
import Sidebar from './components/Sidebar'

import components from './Components'

class App extends Component {
  constructor() {
    super()
    this.state = {
      components: components,
      currentComponent: 'alert',
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <a href="/">nomoremarkup</a>
          </h1>
        </header>
        <Sidebar
          {...this.state}
          changeComponent={component => {
            this.setState({ currentComponent: component })
          }}
        />
        <Main {...this.state} />
      </div>
    )
  }
}

export default App
