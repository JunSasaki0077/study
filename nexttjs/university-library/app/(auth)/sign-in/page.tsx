'use client'

import AuthForm from '@/components/AuthForm'
import { signInWIthCredentials } from '@/lib/actions/auth'
import { signInSchema } from '@/lib/validations'

const Page = () => {
  return (
    <AuthForm
      type="SIGN_IN"
      schema={signInSchema}
      defaultValues={{
        email: '',
        password: '',
      }}
      onSubmit={signInWIthCredentials}
    />
  )
}
export default Page
