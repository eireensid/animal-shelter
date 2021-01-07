import {useState, useEffect} from 'react'
import Router from 'next/router'
import axios from 'axios'

export default function useAdmin (isLogin = false) {
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(async () => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsAdmin(true)
    }
    if (isLogin) {
      const token = localStorage.getItem('token')
      let _isAdmin = false
      if (token) {
        try {
          await axios.post('/api/user/check', {token})
          _isAdmin = true      
        } catch (_) {}
      }
      if (!_isAdmin) {
        Router.push('/admin/auth')
      }
    }
  }, [])

  return { isAdmin }
}
