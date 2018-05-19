import React, { Component } from 'react'
import ShadowDOM from './ShadowDOM'
import Modal from './Modal'
import './Main.css'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: null
    }
  }

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
                    <button onClick={() => {this.setState({selected: component})}}>code</button>
                    <ShadowDOM html={component.html} css={component.css} />
                  </div>
                </li>
              )
            )}
          </ul>
        </article>
        {this.state.selected && <Modal component={this.state.selected} close={() => {this.setState({selected: null})}}/>}
      </main>
    )
  }
}
