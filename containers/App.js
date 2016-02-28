import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import classNames from 'classnames'
import MessageForm from '../components/MessageForm'
import ConnectionSettings from '../components/ConnectionSettings'
import MessageList from '../components/MessageList'

class Node extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {messages, connected, requestConnection, changeUrl, url, sendMessage, changeMessageText, newMessageText} = this.props
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12'>
            <h1>WebSocket tester <small><a href="https://github.com/MartinPavlik/websocket-tester">GitHub</a></small></h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <ConnectionSettings handleSubmit={requestConnection} handleUrlChange={changeUrl} url={url} connected={connected} />
            {connected && <MessageForm handleSubmit={sendMessage} handleMessageChange={changeMessageText} value={newMessageText} />}
          </div>
          <div className='col-xs-12 col-md-6'>
            <MessageList messages={messages} />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return state.app
}

const ConnectedNode = connect(mapStateToProps, actions)(Node)
export default ConnectedNode