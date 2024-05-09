export type UserSlice={
    state:{
        userSlice?:{
            addUser:{
                name: string
            }
        }
    } | unknown
}

export type State ={
    userSlice:{
        addUser:{
            name: string,
            userName: string,
            email: string
        }
    }
} 

export type GetState = ()=> ({
    userSlice:{
        addUser: {
            name: string,
            userName: string,
            email: string
        }
    }
})