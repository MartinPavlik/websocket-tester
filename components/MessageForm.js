import React, {Component} from 'react'
import classNames from 'classnames'

class MessageForm extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onSubmit(e) {
    const {handleSubmit} = this.props;
    e.preventDefault();
    handleSubmit(this.refs.messageInput.value);
  }

  onChange(e) {
    const {handleMessageChange} = this.props
    handleMessageChange(this.refs.messageInput.value)
  }

  render() {
    const {value} = this.props
    return (
      <form onSubmit={this.onSubmit} className='form-horizontal'>
        <div className='form-group'>
          <div className='col-xs-12'>
            <textarea onChange={this.onChange} value={value} className='form-control' rows='6' ref='messageInput' />
          </div>
        </div>
        <div className='form-group'>
          <div className='col-xs-12'>
            <button type='submit' className='btn btn-success btn-large'>Send message</button>
          </div>
        </div>
      </form>
    )
  }
}

export default MessageForm