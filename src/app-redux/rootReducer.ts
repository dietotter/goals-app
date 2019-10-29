import { combineReducers, Reducer } from 'redux'
import { History } from 'history'
import { connectRouter } from 'connected-react-router'

import { RootState } from 'app-redux/types'
import goals from 'app-redux/ducks/Goals'
// import { dialogState } from '../modules/Dialog'
// import { drawerState } from '../modules/Drawer'
// import { signInRootReducer } from '../modules/SignIn/SignIn.state'

const createRootReducer = (history: History): Reducer<RootState> => combineReducers({
    router: connectRouter(history),
    goals
    // signInState: signInRootReducer,
})

export default createRootReducer
