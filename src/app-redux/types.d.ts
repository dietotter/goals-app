import { RouterState } from 'connected-react-router'
import { IGoalsState } from 'app-redux/ducks/Goals'

export type RootState = {
    router: RouterState,
    goals: IGoalsState
}