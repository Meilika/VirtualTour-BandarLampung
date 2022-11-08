import { useEffect, useState } from 'react'

import { getDetail } from '../contentful'

export default function useDetail(slug) {
  const promise = getDetail(slug)

  const [post, setPost] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    promise.then(result => {
      setPost(result[0].fields)
      setLoading(false)
      console.log(result[0].fields)
    })
  }, [])

  return [post, isLoading]
}