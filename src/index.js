import React from 'react'
import PropTypes from 'prop-types'

export const DEFAULT = 'DEFAULT'

export const Context = React.createContext({})

export class BranchProvider extends React.Component {
  static propTypes = {
    value: PropTypes.object.isRequired
  }

  render () {
    return (
      <Context.Provider {...this.props} />
    )
  }
}

export class BranchConsumer extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
  }

  render () {
    const { name, children } = this.props

    return (
      <Context.Consumer>
        {state => children(state[name])}
      </Context.Consumer>
    )
  }
}

export class Branch extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    variant: PropTypes.string
  }

  render () {
    const { children, name, variant } = this.props
    const [ a, b ] = React.Children.toArray(children)

    return (
      <Context.Consumer>
        {state => {
          if (!state[name] || state[name] === DEFAULT) {
            return a
          } else {
            return b
          }
        }}
      </Context.Consumer>
    )
  }
}
