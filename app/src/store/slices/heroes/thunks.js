import { heroAPI } from '../../../services/heroAPI'
import {loading, setAll, setByScroll} from './heroSlice'

export const getAllHeroes = () => {
    return async(dispatch, getState) => {
      dispatch(loading(true))
      heroAPI.getAllHeroes()
        .then(res => {
          dispatch(setAll(res))
          dispatch(setByScroll())
        })
        .catch(err => console.log('Algo exploto'))
        .finally(() => dispatch(loading(false)))
    }
}