import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userCreateReducer, userListReducer } from './reducers/userReducers'


const reducer = combineReducers({
  userList: userListReducer,
  userCreate: userCreateReducer,
})

const initialState = {}
const middleware = [thunk]
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
