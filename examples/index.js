import React from 'react'
import { Formik } from 'formik'
import {
  Provider as RebassProvider,
  Flex,
  Box,
  Container,
  Heading,
} from 'rebass'
import {
  BranchProvider,
  BranchConsumer
} from '../src'
import SignUpExperiment from './components/SignUpExperiment'

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
          <Flex flexWrap={[ 'wrap', 'nowrap' ]}>
            <Box width={1}>
              <Container px={3} py={4}>
                <Heading is='h1' mb={3}>Rebranch Example</Heading>
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
              </Container>
            </Box>
            <Box p={3} width={[ 1, 256 ]}>
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
            </Box>
          </Flex>
        </RebassProvider>
      </BranchProvider>
    )
  }
}
