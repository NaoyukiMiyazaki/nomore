import React, { Component } from 'react'

export default class ShadowDOM extends Component {
  constructor(props) {
    super(props)
    this.wrapper = React.createRef()
  }

  componentDidMount() {
    let shadow = this.wrapper.current.attachShadow({ mode: 'open' })
    shadow.innerHTML = `<style>${this.props.css}</style>${this.props.html}`
  }

  render() {
    return <div ref={this.wrapper} />
  }
}
