import { applyMiddleware, compose, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-logger'

import createRootReducer from './rootReducer'

export const history = createBrowserHistory()

function configureStore(preloadedState) {
    const middlewares = [routerMiddleware(history), loggerMiddleware, thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer, /*other enhancers*/]
    const composedEnhancers = compose(...enhancers)

    //@ts-ignore
    const store = createStore(createRootReducer(history), preloadedState, composedEnhancers)

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./rootReducer', () => store.replaceReducer(createRootReducer(history)))
    }

    return store
}

export default configureStore
