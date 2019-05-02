import React, { Component } from 'react'

class AnnoyingForm extends Component {
  handleKeyUp(evt) {
    if (evt.keyCode === 81) {
      console.log('Love some %%%%%')
    } else {
      console.log('booo')
    }
  }

  render() {
    return (
      <div>
        <h3>Try Typing in Here:</h3>
        <textarea onKeyUp={this.handleKeyUp} />
      </div>
    )
  }
}

export default AnnoyingForm
