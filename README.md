
# Rebranch

React context-based, conditional rendering components for A/B experiments

[![Build Status][build-badge]][build-status]

**Requires React v16.3.0 and up**

[build-badge]: https://img.shields.io/travis/jxnblk/rebranch/master.svg?style=flat-square
[build-status]: https://travis-ci.org/jxnblk/rebranch

```sh
npm i rebranch
```

```jsx
// example App.js
import React from 'react'
import { BranchProvider } from 'rebranch'

// initialize the provider with the current session's
// A/B experimentation state
// This should be an object of experiment names,
// with...
import experimentsState from './experiments'
import Home from './Home'

/* example experimentsState object
{
  HOME_SIGN_UP: 'VARIANT',
  FOOTER_SIGN_UP: 'DEFAULT'
}
*/

export default class App extends React.Component {
  render () {
    return (
      <BranchProvider value={experimentsState}>
        <Home />
      </BranchProvider>
    )
  }
}
```

```jsx
// example Home.js
import React from 'react'
import { BranchConsumer } from 'rebranch'
import SignUpForm from './SignUpForm'

// duplicated SignUpForm component, optimized for code deletion
import VARIANT_SignUpForm from './experiments/VARIANT_SignUpForm'

export default class Home extends React.Component {
  render () {
    return (
      <BranchConsumer name='HOME_SIGN_UP'>
        {state => {
          switch (state) {
            case 'VARIANT':
              return <VARIANT_SignUpForm />
            case 'DEFAULT':
            default:
              return <SignUpForm />
          }
        }}
      </BranchConsumer>
    )
  }
}
```

## Alternative Branch Component API

```jsx
// example Home.js
import React from 'react'
import { Branch } from 'rebranch'
import SignUpForm from './SignUpForm'
import VARIANT_SignUpForm from './experiments/VARIANT_SignUpForm'

// for true A/B tests (not multivariant)
// the first child will render when the experiment state is 'DEFAULT'
// the second child will render when the experiment state is *not* `'DEFAULT'`
export default class Home extends React.Component {
  render () {
    return (
      <Branch name='HOME_SIGN_UP'>
        <SignUpForm />
        <VARIANT_SignUpForm />
      </Branch>
    )
  }
}
```

## Demo

[View the example](examples) for a basic demo

[MIT License](LICENSE.md)
