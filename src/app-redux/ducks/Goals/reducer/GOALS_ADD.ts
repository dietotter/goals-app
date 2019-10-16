export const goalsAddReducer = (state, payload) => ({
    ...state,
    goals: state.goals.concat(payload)
})
