import createReducer from 'util/createReducer'

import {
    goalsAddReducer
} from './reducer'

import * as allActions from './action'

export const GOALS_GET_ALL = 'goals/GET_ALL'
export const GOALS_GET = 'goals/GET'
export const GOALS_ADD = 'goals/ADD'
export const GOALS_DELETE = 'goals/DELETE'

const initialState = {
    goals: []
}

const reducers = {
    [GOALS_ADD]: goalsAddReducer
}

export const actions = allActions

export default createReducer(initialState, reducers)
