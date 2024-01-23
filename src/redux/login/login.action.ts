 // Action Types

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED'

// Action Creators


export const loginSuccessAction = () => ({
  type: typeof LOGIN_SUCCESS,
  payload : {}
})

export const loginFailedAction = () => ({
  type: typeof LOGIN_FAILED,
  payload : {}
})


