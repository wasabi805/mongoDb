import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userName: '',
    password: ''
  }

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {

      setInput: ( state , action) => {
        const [ key, value ] = Object.entries(action.payload)[0]
        state[key] =  value
      },

    },
  })
  
  // Action creators 
  export const { setInput } = loginSlice.actions
  
  export default loginSlice.reducer