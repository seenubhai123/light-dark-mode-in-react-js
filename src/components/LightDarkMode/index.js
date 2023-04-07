// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {className: 'bg-Dark', text: 'Light Mode', heading: 'dark-heading'}

  onModeButton = () => {
    const {className} = this.state

    if (className === 'bg-Dark') {
      this.setState(() => ({
        className: 'bg-Light',
        text: 'Dark Mode',
        heading: 'light-heading',
      }))
    } else {
      this.setState(() => ({
        className: 'bg-Dark',
        text: 'Light Mode',
        heading: 'dark-heading',
      }))
    }
  }

  render() {
    const {className, text, heading} = this.state

    return (
      <div className="bg-Container">
        <div className={className}>
          <h1 className={heading}>Click to Change Mode</h1>
          <div>
            <button
              className="button"
              type="submit"
              onClick={this.onModeButton}
            >
              {text}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
