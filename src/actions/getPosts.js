
export const getPosts = () => {
  return dispatch => fetch("http://localhost:3000/posts")
    .then(res => res.json())
    .then(posts => dispatch({ type: 'GET_POSTS', payload: posts}))
}

export const addPost = (post) => {
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