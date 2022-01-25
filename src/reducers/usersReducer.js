

// const initialUser = {    
//     username: "",
//     password: "",
//     bio: "",
//     photo: "",
//     id: null
// }
const initialState = {
    users: {
        username: ""
    } 
    
}

export const usersReducer = (state=initialState, action) => {
    console.log(action)
    switch(action.type)
   {
        // case 'FETCH_USERS':
        //     return {...state, user: action.payload}
        case 'SET_USER':
            return {...state, users: action.payload}        
            default:
                return state
    }
}

