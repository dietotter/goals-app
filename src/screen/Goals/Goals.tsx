import * as React from 'react'
import { createGoals } from '../../../demoData/goals'

interface IProps {

}

interface IState {

}

export class Goals extends React.Component<IProps, IState> {
  constructor() {
    //@ts-ignore
    super()
    this.state = {
      goals: createGoals()
    }
  }


  render() {
    //@ts-ignore
    const { goals } = this.state

    return (
      <div className={'example'}>
        {goals.map(item => (
            <div>
              {item.name}
              <p><b>Due:</b> {item.due}</p>
            </div>
        ))}
      </div>
    )
  }
}

export const routes: RouteType = { path: '/goals', component: Goals };
