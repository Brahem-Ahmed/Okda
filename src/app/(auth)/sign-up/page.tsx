import { RegisterForm } from '@/app/features/auth/components/register-form'
import { requireUnAuth } from '@/lib/auth-utils';
import React from 'react'

const page = async () => {
  await requireUnAuth();
  return (
    <RegisterForm />
  )
}

export default page