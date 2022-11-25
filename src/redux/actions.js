export const USER_EMAIL = "USER_EMAIL"
export const USER_PASSWORD = "USER_PASSWORD"
export const ACCESS_TOKEN = "ACCESS_TOKEN"


export const addEmail = email => dispatch => {
    return dispatch({
        type: USER_EMAIL,
        payload : email
    })
}

export const addPassword = password => dispatch => {
    return dispatch({
        type: USER_PASSWORD,
        payload : password
    })
}

export const addAccesToken = (token) => (dispatch) => {
  return dispatch({
    type: USER_EMAIL,
    payload: token,
  });
};