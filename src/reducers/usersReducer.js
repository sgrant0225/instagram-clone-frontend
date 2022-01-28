

const initialUser = {    
    username: ""
}
const initialState = {
    user: initialUser
    
}

export const usersReducer = (state=initialState, action) => {
    switch(action.type)
   {
        case 'GET_USERS':
            return {...state, user: action.payload}
        case 'SET_USER':
            return {...state, user: action.payload}  
        case "LOGOUT":
            return {...state, user: initialUser}          
            default:
                return state
    }
}

