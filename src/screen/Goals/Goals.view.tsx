import * as React from 'react'
import { createDemoGoals } from '../../../demoData/goals'

interface IProps {

}

interface IState {

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

  handleChange (name) {
    return event => this.setState({ [name]: event.target.value })
  }

  handleSubmit(event) {
    //@ts-ignore
    const { newGoal, dueDate } = this.state
    //@ts-ignore
    const { goalsActions: { add } } = this.props
    if (newGoal && dueDate) {
      add({
        name: newGoal,
        due: dueDate
      })
    } else {
      alert('Fill in all fields')
    }
    event.preventDefault()
  }

  render() {
    //@ts-ignore
    const { goalsState: { goals }} = this.props
    //@ts-ignore
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
