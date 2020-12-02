import Router from 'next/router'
import {MainLayout} from '~/components/MainLayout'

export default function About(title='About Page') {
  return <MainLayout title={title}>
    <h1>about page</h1>
    <button onClick={() => Router.push('/')}>Go back to home</button>
  </MainLayout>
}