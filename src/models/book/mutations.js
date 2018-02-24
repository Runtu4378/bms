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
  state.modalEditType = 'create'
  state.modalEditItem = { }
}

export const modalEditEdit = (state, payload) => {
  const { title, ...detail } = payload
  state.modalEditVisible = true
  state.modalEditTitle = title
  state.modalEditType = 'edit'
  state.modalEditItem = { ...detail }
}

export const modalEditHide = (state, payload) => {
  state.modalEditVisible = false
  state.modalEditTitle = ''
  state.modalEditType = ''
  state.modalEditItem = {}
}

export const modalViewShow = (state, payload) => {
  state.modalViewVisible = true
  state.modalViewItem = payload
}

export const modalViewHide = (state, payload) => {
  state.modalViewVisible = false
  state.modalViewItem = {}
}
