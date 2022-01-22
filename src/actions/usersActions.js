



// export const getUsers = () => {
//     return dispatch => fetch("http://localhost:3000/users")
//       .then(res => res.json())
//       .then(posts => dispatch({ type: 'FETCH_USERS', user: payload: posts}))
//   }

export const submitSignup = (user) => {
    return dispatch => fetch("http://127.0.0.1:3000/signup", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
     })
     .then(response => {
        if (response.ok) {
            response.json()
            .then(response => { 
                  dispatch({type: "SET_USER", payload: response.user}) 
            });
        } else {
            response.json()
            .then(response => alert(response.errors))
        }
     })

}


export const submitLogin = (user) => {
    console.log(user)
     return dispatch => fetch("http://localhost:3000/login", 
     {method: 'POST',
     headers: {
         'Content-Type': 'application/json',
     },
     body: JSON.stringify(user),
  }) 
  .then((response) => {
      if (response.ok) {
          response.json()
          .then(response => { 
                dispatch({type: "SET_USER", payload: response.user}) 
          });
      } else {
          response.json()
          .then(response => alert(response.errors))
      }
   })
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

