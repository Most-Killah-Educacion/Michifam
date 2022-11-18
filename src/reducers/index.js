import { combineReducers } from 'redux'
import reducersHome from '../pages/Home/reducers'
import reducersProducts from '../pages/Products/reducers'

const reducer = combineReducers({
  reducersHome,
  reducersProducts
})

export default reducer
