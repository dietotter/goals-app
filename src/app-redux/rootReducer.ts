import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
// import { dialogState } from '../modules/Dialog'
// import { drawerState } from '../modules/Drawer'
// import { signInRootReducer } from '../modules/SignIn/SignIn.state'

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    // signInState: signInRootReducer,
})

export default createRootReducer
