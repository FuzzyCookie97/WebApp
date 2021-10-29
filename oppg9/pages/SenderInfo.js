import { useState } from 'react'

import axios from 'axios'

const SenderInfo = () => {
  const [info, setInfo] = useState([])
  const [error, setError] = useState(null)
  const [firstName, setFirstName] = useState('')

  const handleNameChange = (event) => {
    setFirstName(event.target.value)
  }

  const createInfo = async () => {
    try {

      const response = await axios.post('/api/info', { firstName })

      if (response?.data?.success) {
        setInfo(response.data.data)
      }
    } catch (err) {

      setError(err?.response?.data?.error)
    }
  }

  const handleSubmit = async (event) => {

    event.preventDefault()
    await createInfo()
  }

  if (error) {
    return <p>You broke it, here's why: {error}</p>
  }

  return (
    <div>
      <h1>Create Info</h1>
      <form style={{ marginBottom: '2rem' }} onSubmit={handleSubmit}>
        <label htmlFor="firstName">Make a new name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleNameChange}
        />
        <button type="submit">Send</button>
      </form>
      <section>{JSON.stringify(info)}</section>
    </div>
  )
}

export default SenderInfo