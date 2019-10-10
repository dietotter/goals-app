import { hot } from 'react-hot-loader/root' // connect hot reloading
import * as React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { History } from 'history'

import { Router } from 'root/Router'

interface RootProps {
    history: History
}

const Root: React.FC<RootProps> = ({ history }: RootProps) => {
    return (
        <ConnectedRouter history={history}>
            <Router/>
        </ConnectedRouter>
    )
}

export default hot(Root)
