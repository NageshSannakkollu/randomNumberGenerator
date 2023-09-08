// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    number: 0,
  }

  generateNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({number: randomNumber})
  }

  render() {
    const {number} = this.state
    return (
      <div className="random-generator-container">
        <div className="inside-container">
          <h1 className="random-number-heading">Random Number</h1>
          <p className="generate-description">
            Generate a random number in the <br />
            range of 0 and 100
          </p>
          <button
            type="button"
            className="generate-button"
            onClick={this.generateNumber}
          >
            Generate
          </button>
          <p className="number">{number}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
