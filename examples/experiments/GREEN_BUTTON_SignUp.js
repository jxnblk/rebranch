// This file is a duplicate of the default SignUp component
// optimized for code deletion
// This file *could* have a lot of hacky/one-off changes for experimentation.
// In this case, it only changes the color of the submit button
import React from 'react'
import styled from 'styled-components'
import {
  Box,
  Flex,
  Container,
  Card,
  Heading,
  Text,
  Label,
  Input,
  Button
} from 'rebass'

// custom hacks for the variant
const GreenButton = styled(Button)([], {
  width: '100%',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
})
GreenButton.defaultProps = {
  color: 'text',
  bg: 'green',
  py: 3
}

export default ({
  values: {
    email,
    password
  },
  handleSubmit,
  handleChange,
  handleBlur
}) => (
  <Container px={3} py={4}>
    <form onSubmit={handleSubmit}>
      <Card p={3}>
        <Heading mb={2}>Sign Up</Heading>
        <Box mb={3}>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            name='email'
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Box>
        <Box mb={3}>
          <Label htmlFor='password'>Password</Label>
          <Input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Box>
        <GreenButton>Sign Up</GreenButton>
      </Card>
    </form>
  </Container>
)
