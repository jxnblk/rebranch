import test from 'ava'
import React from 'react'
import { create as render } from 'react-test-renderer'
import {
  BranchProvider,
  BranchConsumer,
  Branch
} from './src'

test('BranchProvider renders', t => {
  const json = render(<BranchProvider value={{}} children='hello' />).toJSON()
  t.snapshot(json)
})

test('BranchConsumer renders', t => {
  const json = render(
    <BranchProvider value={{ hello: 'ON' }}>
      <BranchConsumer name='hello'>
        {state => state === 'ON' ? (
          'hello is ON'
        ) : (
          'this should not render'
        )}
      </BranchConsumer>
    </BranchProvider>
  ).toJSON()
  t.is(json, 'hello is ON')
  t.snapshot(json)
})

test('Branch renders second child when state is on', t => {
  const json = render(
    <BranchProvider value={{ hello: 'ON' }}>
      <Branch name='hello'>
        <div>this should not render</div>
        <div>hello is ON</div>
      </Branch>
    </BranchProvider>
  ).toJSON()
  const [ text ] = json.children
  t.is(text, 'hello is ON')
  t.snapshot(json)
})

test('Branch renders first child with DEFAULT state', t => {
  const json = render(
    <BranchProvider value={{ hello: 'DEFAULT' }}>
      <Branch name='hello'>
        <div>hello is default</div>
        <div>this should not render</div>
      </Branch>
    </BranchProvider>
  ).toJSON()
  const [ text ] = json.children
  t.is(text, 'hello is default')
  t.snapshot(json)
})

test('Branch renders first child with undefined state', t => {
  const json = render(
    <BranchProvider value={{}}>
      <Branch name='hello'>
        <div>hello is default</div>
        <div>this should not render</div>
      </Branch>
    </BranchProvider>
  ).toJSON()
  const [ text ] = json.children
  t.is(text, 'hello is default')
  t.snapshot(json)
})
