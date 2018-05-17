import React, { Component } from 'react'
import ShadowDOM from './ShadowDOM'
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
                  <div>
                    <ShadowDOM html={component.html} css={component.css} />
                  </div>
                </li>
              )
            )}
          </ul>
        </article>
      </main>
    )
  }
}
