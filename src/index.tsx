import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Root from 'root' // allowed to write like this (w/o './root') by tsconfig options baseUrl and paths
import configureStore from 'app-redux/configureStore'

const store = configureStore({})

const renderApp = () =>
    ReactDOM.render(
        <Provider store={store}>
            <Root />
        </Provider>,
        document.getElementById('app') as HTMLElement
    )

if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./root', renderApp)
}

renderApp()
