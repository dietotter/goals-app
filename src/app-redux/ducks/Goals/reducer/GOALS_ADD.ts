import { IGoalsState } from '..'

export const goalsAddReducer = (state: IGoalsState, payload: any) => ({
    ...state,
    goals: state.goals.concat(payload)
})
