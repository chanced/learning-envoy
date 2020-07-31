import React, { useState, useEffect } from 'react'

export default function IndexPage() {
  const [res, setRes] = useState('')
  async function fetchAndSet() {
    const req = await fetch('/api')
    const data = await req.text()
    setRes(data)
  }
  useEffect(() => {
    fetchAndSet()
  }, [])

  return (
    <div>
      <pre>{res}</pre>
    </div>
  )
}
