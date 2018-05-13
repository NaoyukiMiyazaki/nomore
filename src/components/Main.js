import React, { Component } from 'react'
import './Main.css'

export default class Main extends Component {
  render() {
    return (
      <main className="App-main">
        <article>
          <h1>{this.props.currentComponent}</h1>
          <ul>
            {this.props.components[this.props.currentComponent].map(
              component => (
                <li key={component.id}>
                  <div>{component.code}</div>
                  <div
                    dangerouslySetInnerHTML={{ __html: component.content }}
                  />
                </li>
              )
            )}
          </ul>
        </article>
      </main>
    )
  }
}
