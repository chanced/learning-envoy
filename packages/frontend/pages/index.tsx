import React, { useState, useRef, useEffect } from 'react'

export default function IndexPage() {
  const [res, setRes] = useState('')
  const [msgs, setMsgs] = useState<string[]>([])
  const ws = useRef<WebSocket | null>()

  async function fetchAndSet() {
    const req = await fetch('/api')
    const data = await req.text()
    setRes(data)
  }
  useEffect(() => {
    fetchAndSet()
    ws.current = new WebSocket('wss://localhost:8080/sockets')
    ws.current.onmessage = function (ev) {
      setMsgs((msgs) => msgs.concat(ev.data))
    }
  }, [])

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          ws.current.send(event.target.value)
        }}
      />
      <div>
        From Server:
        <ul style={{ maxHeight: '100px', overflow: 'scroll' }}>
          {msgs.map((msg, i) => (
            <li key={i}>{msg}</li>
          ))}
        </ul>
      </div>

      <pre>{res}</pre>
    </div>
  )
}
