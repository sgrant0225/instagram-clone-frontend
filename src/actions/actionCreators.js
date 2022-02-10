export const getUsers = () => {
    return dispatch => fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(users => dispatch({ type: 'GET_USERS', payload: users}))
}

export const getAUser = (id) => {
  return dispatch => fetch(`http://localhost:3000/users/${id}`, {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.token
},
   body: JSON.stringify(id), 
 })
    .then(res => res.json())
    .then(user => console.log(user))
}

export const submitSignup = (user) => {
    return dispatch => fetch("http://127.0.0.1:3000/signup", {
    method: 'POST',
    headers: {
         'Content-Type': 'application/json',
     },
     body: JSON.stringify(user),
  }) 
  .then(res => res.json())
  .then(response => {
      localStorage.token = response.token
      dispatch({type: "SET_USER", payload: response.user })
  })

}


export const submitLogin = (user) => {
    console.log(user)
     return dispatch => fetch("http://localhost:3000/login", { 
     method: 'POST',
     headers: {
         'Content-Type': 'application/json',
     },
     body: JSON.stringify(user),
  }) 
  .then(res => handleUserResponse(res, dispatch))
  
}

export const autoLogin = () => {
    return dispatch => fetch("http://localhost:3000/me", {
      headers: {
          'Authorization': localStorage.token
      }  
    })
    .then(res => handleUserResponse(res, dispatch))
    
}

export const logout = () => {
    return dispatch => {
        localStorage.clear()
        dispatch({type: "LOGOUT"})
    }
}


export const getPosts = () => {
    return dispatch => fetch("http://localhost:3000/posts")
      .then(res => res.json())
      .then(posts => dispatch({ type: 'GET_POSTS', payload: posts}))
  }
  

  export const getPost = (id) => {
    return dispatch => fetch(`http://localhost:3000/posts/${id}`)
      .then(res => res.json())
      .then(post => dispatch({ type: 'GET_POST', payload: post}))
  }

  export const addPost = post => {
     return dispatch => fetch("http://localhost:3000/posts", {
       method: "POST",
       headers: {
         'Content-Type': 'application/json',
         'Authorization': localStorage.token
       },
       body: JSON.stringify(post)
     })
     .then(res => res.json())
     .then(post => {
       dispatch({type: "ADD_POST", payload: post})
     })
  }
  
  
  //unable to fetch because the postId is null
  export const addComment = (text, post_id) => {
    
     console.log(text)
     console.log(post_id)
    return dispatch => fetch(`http://localhost:3000/posts/${post_id}/comments`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.token
      },
      body: JSON.stringify(text)
    })
     .then(response => response.json())
     .then(text => { 
       dispatch({type: "ADD_COMMENT", payload: text})
     })
  }

  export const deletePost = (post_id) => {
    //debugger
    return dispatch => fetch(`http://localhost:3000/posts/${post_id}`, {
      method: 'DELETE', 
      headers: {
        'Content_Type': 'application/json',
      }, 
    }) 
      .then(() => dispatch({type: "DELETE_POST"}))
  }






function handleUserResponse(res, dispatch) {
    if (res.ok){
        res.json()
        .then(response => {
            localStorage.token = response.token
            dispatch({type: "SET_USER", payload: response.user})
        })
    } else {
        res.json()
        .then(res => alert(res.errors))
    }
}
