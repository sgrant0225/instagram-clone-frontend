


const initialPost = {
  caption: "",
  image: "",
  likes: null,
  id: null,
 
  
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
  comments: [],
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
      return {...state, setPost: initialPost, comments: [ action.payload, ...state.comments] }   
    case 'DELETE_POST':
       return {...state, setPost: initialPost}      
    default: 
      return {...state }
  }
}