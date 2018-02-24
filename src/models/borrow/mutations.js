export const querySuccess = (state, payload) => {
  const { list, current, pageSize, total } = payload
  state.list = list
  state.pagination = {
    ...state.pagination,
    current,
    pageSize,
    total,
  }
}
