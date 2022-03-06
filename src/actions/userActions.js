import axios from 'axios'
import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_CREATE_REQUEST,
  USER_CREATE_SUCCESS,
  USER_CREATE_FAIL,
} from '../constants/userConstants'

export const listUsers =
  (userType = '', pageNumber = '', limit = '') =>
  async (dispatch) => {
    try {
      dispatch({ type: USER_LIST_REQUEST })

      const { data } = await axios.get(
        `https://60f2479f6d44f300177885e6.mockapi.io/users?user_type=${userType}&?page=${pageNumber}&limit=${limit}`
      )

      dispatch({ type: USER_LIST_SUCCESS, payload: data })
    } catch (error) {
      dispatch({
        type: USER_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  export const createUser = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_CREATE_REQUEST })

    // const {
    //   userLogin: { userInfo },
    // } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    
    // const { data } = await axios.post(
    //   'https://60f2479f6d44f300177885e6.mockapi.io/users',
    //   user,
    //   config
    // )

    dispatch({ type: USER_CREATE_SUCCESS, payload: user })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    
    dispatch({
      type: USER_CREATE_FAIL,
      payload: message,
    })
  }
}
