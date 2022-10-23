import React, { useEffect } from 'react'
import Card from '../../components/card/Card'
import { Container } from './Home.styled'
import { useSelector, useDispatch } from 'react-redux'
import { getAllHeroes, setByScroll } from '../../store/slices/heroes'
import InfiniteScroll from 'react-infinite-scroll-component'

const Home = () => {
  const {resultByScroll} = useSelector(state => state.heroes)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllHeroes())
  }, [])
  
  return (    
    <InfiniteScroll dataLength={resultByScroll.length} hasMore={true} next={() => dispatch(setByScroll())}>
      <Container>
      {
        resultByScroll && 
          resultByScroll.map(element => <Card key={element.id} hero={element} />)     
      }
      </Container>
    </InfiniteScroll>
  )
}

export default Home