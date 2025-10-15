import { LoginForm } from '@/app/features/auth/components/login-form'
import { requireUnAuth } from '@/lib/auth-utils'
import React from 'react'

const page = async () => {
    await requireUnAuth();
  return (
    <LoginForm />
  )
}

export default page