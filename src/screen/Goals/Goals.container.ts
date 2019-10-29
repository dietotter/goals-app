import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { push } from 'connected-react-router'

import View from './Goals.view'
import { actions } from 'app-redux/ducks/Goals'
import { RootState } from 'app-redux/types'

const Goals = connect(
    (state: RootState) => ({
        goalsState: state.goals
    }),
    (dispatch: Dispatch) => ({
        push: bindActionCreators(push, dispatch),
        goalsActions: bindActionCreators(actions, dispatch),
    })
)(View)

export const routes: RouteType = { path: '/goals', component: Goals }
