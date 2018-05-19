import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './Modal.css'

export default class Modal extends Component {
  render() {
    return (
        ReactDOM.createPortal(
            <div className="Modal">
                <div className="Modal-overlay" onClick={this.props.close}></div>
                <div className="Modal-container">
                    <pre><code>{this.props.component.css}</code></pre>
                    <pre><code>{this.props.component.html}</code></pre>
                    <button onClick={this.props.close}>close</button>
                </div>
            </div>,
            document.getElementById('modal-root'),
        )
    )
  }
}
