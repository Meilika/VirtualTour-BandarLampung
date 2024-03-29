import { useEffect, useState } from 'react'

import { getDetail } from '../contentful'

export default function useDetail(slug) {
  const promise = getDetail(slug)

  const [post, setPost] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const [vr, setVr] = useState(null)
  const [ket, setKet] = useState(null)

  useEffect(() => {
    promise.then(result => {
      setPost(result[0].fields)
      setLoading(false)
      console.log(result[0].fields)
      setVr(result[0].fields.vr)
      setKet(result[0].fields.keterangan)
    })
  }, [])

  return [post, isLoading, vr, ket]
}