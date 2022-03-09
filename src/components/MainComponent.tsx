import { Component } from 'react'

interface MainComponentProps {
  title: string
  subTitle: string
  color?: string
}

interface MainComponentState {
  variant: string
}

class MainComponent extends Component<MainComponentProps, MainComponentState> {
  // the type arguments you can give a class components are called P and S
  // those are pointing to the PROPS and STATE of the component

  state: MainComponentState = {
    variant: 'success',
  }

  render() {
    return (
      <div style={{ color: this.props.color || 'black' }}>
        <h1>{this.props.title}</h1>
        <h3>{this.props.subTitle}</h3>
        <div className={this.state.variant}>ALERT DIV</div>
        <button
          onClick={() =>
            this.setState({
              variant: this.state.variant === 'success' ? 'danger' : 'success',
            })
          }
        >
          CHANGE VARIANT
        </button>
      </div>
    )
  }
}

export default MainComponent

// this.props are ALWAYS an OBJECT
// how to describe the shape of an object in TS? an INTERFACE

// in TS some structures (like a class component) can receive interfaces
// with TYPE ARGUMENTS <>
// an array can be described in 2 ways:
// 1) string[]
// 2) Array<string>
