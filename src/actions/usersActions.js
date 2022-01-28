
export const getUsers = () => {
    return dispatch => fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(users => dispatch({ type: 'GET_USERS', payload: users}))
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
  .then(res => res.json())
  .then(response => {
      localStorage.token = response.token
      dispatch({type: "SET_USER", payload: response.user })
  })
}

export const autoLogin = () => {
    return dispatch => fetch("http://localhost:3000/me", {
      headers: {
          'Authorization': localStorage.token
      }  
    })
    .then(res => res.json())
    .then(response => {
        localStorage.token = response.token
        dispatch({type: "SET_USER", payload: response.user})
    })
}

export const logout = () => {
    return dispatch => {
        localStorage.clear()
        dispatch({type: "LOGOUT"})
    }
}






// function handleUserResponse(response, dispatch) {
//     console.log(response)
//     console.log(dispatch)
//     // if (response.ok) {
//     //     response.json()
//     //     .then(res => {
//     //         dispatch({type: "SET_USER", payload: res.user})
//     //     })
//     // } else {
//     //     response.json()
//     //     .then(response => alert(response.errors))
//     // }
// }

