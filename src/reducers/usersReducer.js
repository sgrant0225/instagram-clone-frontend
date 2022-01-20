const initialState = {
    user: []
}

export const usersReducer = (state=initialState, action) => {
    switch(action.type){
        case 'FETCH_USERS':
            return action.payload
        case 'ADD_USERS':
            return{...state, user: action.payload}     
            default:
                return state
    }
}

