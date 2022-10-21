import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card'
import { heroAPI } from '../../services/heroAPI'
import { Container } from './Home.styled'

const Home = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    heroAPI.getAllHeroes().then(res => setData(res.slice(0,10)))
  
    return () => {
      setData(null)
    }
  }, [])
  
  return (
    <Container>
      {
        data && 
            data.map(element => <Card key={element.id} hero={element} />)     
      }
    </Container>
  )
}

export default Home