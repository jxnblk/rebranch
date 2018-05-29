import React from 'react'
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
        <Button>Sign Up</Button>
      </Card>
    </form>
  </Container>
)
