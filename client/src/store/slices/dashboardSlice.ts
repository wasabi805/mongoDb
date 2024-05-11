import { createSlice } from "@reduxjs/toolkit"

type InitialState = {
    [name: string]: string | unknown;
    currentTab: string
  };

type Dashboard_Action={
    payload:{
        currentTab: string
    }
}  

const initialState={
    currentTab : 'users'
}

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers:{
        setTabClick :(state: InitialState, action: Dashboard_Action)=>{

            state.currentTab = action.payload.currentTab
        }
    }

})


export const {setTabClick} = dashboardSlice.actions
export default dashboardSlice.reducer