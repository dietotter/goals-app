import { GOALS_GET_ALL } from '..'

export const getAll = () => ({
    type: GOALS_GET_ALL
})

// this this will most likely be async and get all goals from server
// Maybe change action signature because of this (smth which points that this action is async)
