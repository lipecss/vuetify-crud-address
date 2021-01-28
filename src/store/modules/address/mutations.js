export default {
  'SET_LIST' (state, payload) {
    state.addressList = payload
  },
  'PUSH_TO_LIST' (state, payload) {
    state.addressList.unshift(payload)
  },
  'REMOVE_TO_LIST' (state, payload) {
    state.addressList.splice(payload, 1)
  },
  'UPDATE_TO_LIST' (state, payload) {
    const list = state.addressList

    const newList = list.map((item) => {
      if (item.id === payload.id) item = payload
      return item
    })
    state.addressList = newList
  }
}
