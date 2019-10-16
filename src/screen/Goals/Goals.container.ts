import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'connected-react-router'

import View from './Goals.view'
import { actions } from 'app-redux/ducks/Goals'

const Goals = connect(
    (state: any) => ({
        goalsState: state.goals
    }),
    dispatch => ({
        push: bindActionCreators(push, dispatch),
        goalsActions: bindActionCreators(actions, dispatch),
    })
)(View)

export const routes: RouteType = { path: '/goals', component: Goals }
