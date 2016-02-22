import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import classNames from 'classnames'

class Node extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {username, password, logged, users} = this.props
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12'>
            <h1>WebSocket tester <small><a href="https://github.com/MartinPavlik/websocket-tester">GitHub</a></small></h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <h2>Processs</h2>
          </div>
          <div className='col-xs-12 col-md-6'>
            <h2>History</h2>
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