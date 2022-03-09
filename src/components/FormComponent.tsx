import { useState, ChangeEvent, FormEvent } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const FormComponent = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('hello!', e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('bravo!')
  }

  const navigate = useNavigate()

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
      <Button onClick={() => navigate('/')}>GO HOME</Button>
    </>
  )
}

export default FormComponent
