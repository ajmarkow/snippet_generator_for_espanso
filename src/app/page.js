'use client'
import Form from '@rjsf/mui'
import validator from '@rjsf/validator-ajv8'
import { Container } from '@mui/material'
const schema = require('../../public/Espanso_Match_Schema.json')

export default function Home () {
  return (
    <Container maxWidth='lg'>
      <Form
        schema={schema}
        validator={validator}
        onChange={console.log('changed')}
        onSubmit={console.log('submitted')}
        onError={console.log('errors')}
      />
    </Container>
  )
}
