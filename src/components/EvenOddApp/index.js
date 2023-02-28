// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onClickIncrement = () => {
    const randomNum = this.getRandomNumber()

    this.setState(prevState => ({count: prevState.count + randomNum}))
  }

  render() {
    const {count} = this.state
    const type = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="background">
        <h1 className="heading">Count {count}</h1>
        <p className="para">Count is {type}</p>
        <button
          className="button"
          type="button"
          onClick={this.onClickIncrement}
        >
          Increment
        </button>
        <p className="about">Increase by Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
