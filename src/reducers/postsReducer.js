const initialPost = {
    caption: "",
    image: "",
    id: null
}

const initialState = {
    posts: [],
    setPost: initialPost
}


export const postsReducer = (state=initialState, action) => {
    switch(action.type){
        case 'GET_POSTS':
            return {...state, posts: action.payload}
        case 'ADD_POST':
            return {...state, setPost: initialPost, posts:[ action.payload, ...state.posts] }
            default:
                return {...state}
    }
}