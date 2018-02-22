export const loginSuccess = (state, payload) => {
  state.login = true
  state.user = payload
}

export const logout = (state, payload) => {
  state.login = false
  state.user = {}
}
