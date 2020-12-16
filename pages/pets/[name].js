import {useRouter} from 'next/router'

export default function Pet() {
  const router = useRouter()
  return <>
    <h1>{router.query.name}</h1>
  </>
}