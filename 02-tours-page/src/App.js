import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [tours, setTours] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async() => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setIsLoading(false)
      setTours(tours)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if(isLoading){
    return <main>
      <Loading />
    </main>
  }
  else {
    return <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  }

}

export default App
