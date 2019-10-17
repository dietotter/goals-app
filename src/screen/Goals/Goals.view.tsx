import * as React from 'react'
import { createDemoGoals } from '../../../demoData/goals'

interface IProps {
  goalsState: any,
  push: any,
  goalsActions: any
}

interface IState {
  newGoal: string,
  dueDate: string,
  [name: string]: string // it fixes TS issue in handleChange method, don't know if it's proper way to solve it
}

export class GoalsView extends React.Component<IProps, IState> {
  constructor(props) {
    super(props)
    this.state = {
      newGoal: '',
      dueDate: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (name: string) {
    return (event: React.ChangeEvent<HTMLInputElement>) => this.setState({ [name]: event.target.value })
  }

  handleSubmit(event: React.MouseEvent<HTMLInputElement>) {
    const { newGoal, dueDate } = this.state
    const { goalsActions: { add } } = this.props
    if (newGoal && dueDate) {
      add({
        name: newGoal,
        due: dueDate
      })
      this.setState({newGoal: '', dueDate: ''})
    } else {
      alert('Fill in all fields')
    }
    event.preventDefault()
  }

  render() {
    const { goalsState: { goals }} = this.props
    const { newGoal, dueDate } = this.state

    return (
      <div className={'example'}>
        <div className={'goalsContainer'}>
          {goals.map((item, index) => (
              <div key={index}>
                {item.name}
                <p><b>Due:</b> {item.due}</p>
              </div>
          ))}
        </div>
        <div className={'goalsForm'}>
          <label>
            Type in your goal:
            <input type='text' value={newGoal} onChange={this.handleChange('newGoal')}/>
          </label>
          <label>
            Due date:
            <input type='text' value={dueDate} onChange={this.handleChange('dueDate')}/>
          </label>
          <input style={{color: '#FF00CC'}} type='submit' value='Submit' onClick={this.handleSubmit}/>
        </div>
      </div>
    )
  }
}

export default GoalsView
