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

export const modalEditShow = (state, payload) => {
  state.modalEditVisible = true
  state.modalEditTitle = payload
  state.modalEditItem = { editType: 'create' }
}

export const modalEditHide = (state, payload) => {
  state.modalEditVisible = false
  state.modalEditTitle = ''
  state.modalEditItem = {}
}
