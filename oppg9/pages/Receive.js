import { useEffect, useState } from 'react'
import axios from 'axios'

const Receive = () => {
  const [info, setInfo] = useState([])

  const getInfo = async () => {
    try {
      const response = await axios.get('/api/info')

      if (response?.data?.success) {
        setInfo(response.data.data)
      }
      
    } catch (error) {
      console.log(error?.response?.data)
    }
  }
  useEffect(() => {
    getInfo()
  }, [])

  return (
    <div>
      <h1>Quiz</h1>

      <section>{JSON.stringify(info)}</section>
    </div>
  )
}

export default Receive