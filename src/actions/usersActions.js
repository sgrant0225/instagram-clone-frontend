// export const getUsers = () => {
//     return dispatch => fetch("http://localhost:3000/users")
//       .then(res => res.json())
//       .then(posts => dispatch({ type: 'GET_POSTS', payload: posts}))
//   }

export const submitSignup = (user) => {
    return dispatch => fetch("http://127.0.0.1:3000/users", {
        method: 'POST',
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
     })
     .then(response => handleUserResponse(response, dispatch))
}

function handleUserResponse(response, dispatch) {
    if (response.ok) {
        response.json()
        .then(res => {
            dispatch({type: "ADD_USER", payload: res.user})
        })
    } else {
        response.json()
        .then(res => alert(response.errors))
    }
}