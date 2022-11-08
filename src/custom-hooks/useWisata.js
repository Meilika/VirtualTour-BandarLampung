import { getWisata } from '../contentful'
import { useEffect, useState } from 'react'

const promise = getWisata()

export default function useWisata() {
  const [posts, setPosts] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    promise.then(wisata => {
      setPosts(wisata)
      setLoading(false)
      console.log(wisata)
    })
  }, [])

  return [posts, isLoading]
}