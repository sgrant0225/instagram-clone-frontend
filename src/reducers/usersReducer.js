

const initialUser = {    
    username: "",
    password: "",
    bio: "",
    photo: "",
    id: null
}
const initialState = {
    user: initialUser
    
}

export const usersReducer = (state=initialState, action) => {
    switch(action.type){
        case 'FETCH_USERS':
            return {...state, user: action.payload}
        case 'SET_USER':
            return {...state, user: action.payload}        
            default:
                return state
    }
}

