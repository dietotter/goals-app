import createReducer from 'util/createReducer'

import {
    goalsAddReducer
} from './reducer'

import * as allActions from './action'

export const GOALS_GET_ALL = 'goals/GET_ALL'
export const GOALS_GET = 'goals/GET'
export const GOALS_ADD = 'goals/ADD'
export const GOALS_DELETE = 'goals/DELETE'
// REDO action types as enum when will be adding TS to actions

interface IGoal {
    name: string,
    due: string
}

export interface IGoalsState {
    goals: Array<IGoal>
}

const initialState: IGoalsState = {
    goals: []
}

const reducers = {
    [GOALS_ADD]: goalsAddReducer
}

export const actions = allActions

export default createReducer(initialState, reducers)
