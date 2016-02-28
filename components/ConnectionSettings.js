import React, {Component} from 'react'
import classNames from 'classnames'

class ConnectionSettings extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {handleSubmit, url, handleUrlChange, connected, onCloseConnectionClicked} = this.props

    function onSubmit(e) {
      e.preventDefault()
      handleSubmit()
    }

    function onUrlChange(e) {
      handleUrlChange(e.target.value)
    }

    function renderForm() {
      return (
        <form onSubmit={onSubmit} className='form-horizontal'>
          <div className='form-group'>
            <div className='col-xs-12 col-sm-8'>
              <input value={url} onChange={onUrlChange} className='form-control' />
            </div>
            <div className='col-xs-12 col-sm-4'>
              <button type='submit' className='btn btn-success btn-large'>Connect</button>
            </div>
          </div>
        </form>
      )
    }

    function renderStatus() {
      return (
        <div className='row'>
          <div className='col-xs-12'>
            <strong>Connected to: {url}</strong>
            {' '}
          </div>
        </div>
      )
    }

    return connected ? renderStatus() : renderForm() 
  }
}

export default ConnectionSettings