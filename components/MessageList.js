import React, {Component} from 'react'
import classNames from 'classnames'

class MessageList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {messages} = this.props
    function renderMessage(message) {
      return (
        <li key={message.id}>
          <pre>{message.data}</pre>
        </li>
      )
    }
    return (
      <ul>
        {messages.map(renderMessage)}
      </ul>
    )
  }
}

export default MessageList