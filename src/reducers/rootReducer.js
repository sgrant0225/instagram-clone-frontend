


const initialPost = {
  caption: "",
  image: "",
  likes: null,
  id: null,
  comments: []
  
}

const initialUser = {    
  username: "",
  email: "",
  bio: "",
  photo: "",
  id: null
}

const initialState = {
  posts: [],
  setPost: initialPost,
  user: initialUser
}


export function rootReducer(state=initialState, action){
  switch(action.type) {

    case 'GET_USERS':
      return {...state, user: action.payload}
    case 'SET_USER':
      return {...state, user: action.payload}  
    case "LOGOUT":
      return {...state, user: initialUser} 
    case 'GET_POSTS':
        return {...state, posts: action.payload}
    case 'GET_POST':
       return {...state, setPost: action.payload}
     case "ADD_POST":
        return {...state, setPost: initialPost, posts:[ action.payload, ...state.posts] }
    case 'ADD_COMMENT':
      return {...state, setPost: {...state.setPost, comments: [ action.payload, ...state.setPost.comments] }}         
    default:
      return {...state }
  }
}