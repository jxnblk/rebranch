import React from 'react'
import { Formik } from 'formik'
import { Provider as RebassProvider } from 'rebass'
import {
  BranchProvider,
  BranchConsumer
} from '../src'
import SignUpExperiment from './SignUpExperiment'

const DEFAULT = 'DEFAULT'
const ON = 'ON'

const toggle = key => state => ({
  experiments: {
    ...state.experiments,
    [key]: state.experiments[key] === ON ? DEFAULT : ON
  }
})

export default class extends React.Component {
  state = {
    experiments: {
      GREEN_BUTTON: DEFAULT,
      // LARGE_HEADING: ON
    }
  }

  update = fn => this.setState(fn)

  render () {
    const { experiments } = this.state

    return (
      <BranchProvider value={experiments}>
        <RebassProvider>
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            onSubmit={(values) => {
              alert('form submitted', JSON.stringify(values))
            }}
            render={form => <SignUpExperiment {...form} />}
          />
        </RebassProvider>
        <div>
          <pre>current experimentation state</pre>
          {Object.keys(experiments).map(key => (
            <div key={key}>
              <label>
                <input
                  type='checkbox'
                  checked={experiments[key] !== DEFAULT}
                  onChange={e => this.update(toggle(key))}
                />
                <code>{key}</code>
              </label>
            </div>
          ))}
        </div>
      </BranchProvider>
    )
  }
}
