import * as React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { History } from 'history'

import { Router } from 'root/Router'

interface RootProps {
    history: History
}

export const Root: React.FC<RootProps> = ({ history }: RootProps) => {
    return (
        <ConnectedRouter history={history}>
            <Router/>
        </ConnectedRouter>
    )
}
