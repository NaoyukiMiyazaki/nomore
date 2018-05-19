import React, { Component } from 'react'
import './Sidebar.css'

export default class Sidebar extends Component {
  render() {
    return (
      <aside className="App-sidebar">
        <ul>
          {Object.keys(this.props.components).map(key => (
            <li key={key}>
              <button onClick={() => {
                this.props.changeComponent(key)
              }}>{key}</button>
            </li>
          ))}
        </ul>
      </aside>
    )
  }
}
