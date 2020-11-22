import Router from 'next/router'
import {MainLayout} from '~/components/MainLayout'
import { useEffect } from 'react'
import axios from 'axios'

export default function About(title='Admin') {
  useEffect(async () => {
    const token = localStorage.getItem('token')
    if (!token) {
      Router.push('/admin/auth')
    } else {
      try {
        await axios.post('/api/user/check', {token})        
      } catch (err) {
        Router.push('/admin/auth')
        console.error('err', err)
      }
    }
  }, [])

  return <MainLayout>
    <h1>Welcome you are admin</h1>
    <button onClick={() => Router.push('/')}>Go back to home</button>
  </MainLayout>
}