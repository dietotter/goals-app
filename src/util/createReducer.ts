export default (initialState, reducers) => (
    state = initialState,
    action: any = {}
) => {
    let reducer = reducers[action.type]
    return reducer ? reducer(state, action.payload) : state
}
