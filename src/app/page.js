'use client'
import Form from '@rjsf/mui'
import validator from '@rjsf/validator-ajv8'
import { Paper, Container } from '@mui/material'
const schema = require('../../public/Espanso_Match_Schema.json')

export default function Home () {
  return (
    <Container maxWidth='lg'>
    <Paper elevation='4' sx={{
        px: '10%',
        py: '4%',
        boxShadow: 5
      }}  >
        <Form
        schema={schema}
        validator={validator}
        onChange={console.log('Formchanged')}
        onSubmit={console.log(' Formsubmitted')}
          onError={console.log('Form errors')}
      />
      </Paper>
      </Container>
  )
}
