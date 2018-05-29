import React from 'react'
import { BranchConsumer } from '../../src'
import SignUp from './SignUp'
import GREEN_BUTTON_SignUp from '../experiments/GREEN_BUTTON_SignUp'

export default props => (
  <BranchConsumer name='GREEN_BUTTON'>
    {state => state === 'ON' ? (
      <GREEN_BUTTON_SignUp {...props} />
    ) : (
      <SignUp {...props} />
    )}
  </BranchConsumer>
)
