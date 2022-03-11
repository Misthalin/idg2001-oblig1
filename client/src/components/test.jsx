class ViewBooking extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        pitch: props.booking.pitch,
        email: props.booking.email,
        firstName: props.booking.firstName,
        arrivalDate: props.booking.arrivalDate
      }
  
      this._handleInputChange = this._handleInputChange.bind(this)
      this._handleUpdateClose = this._handleUpdateClose.bind(this)
      this._handleUpdateBooking = this._handleUpdateBooking.bind(this)
      this._handleDelete = this._handleDelete.bind(this)
    }
  
    componentWillReceiveProps(nextProps) {
      this.state = {
        pitch: nextProps.booking.pitch,
        email: nextProps.booking.email,
        firstName: nextProps.booking.firstName,
        arrivalDate: nextProps.booking.arrivalDate
      }
    }
  
    _handleInputChange(event) {
      const target = event.target
      const value = target.type === 'checkbox' ? target.checked : target.value
      const name = target.name
      var partialState = {}
      partialState[name] = value
      this.setState(partialState)
    }
  
    _handleUpdateClose(e) {
      this.props.updateClose()
      e.preventDefault()
    }
  
    _handleUpdateBooking(e) {
      var tempBooking = {
        pitch: this.state.pitch,
        email: this.state.email,
        firstName: this.state.firstName,
        arrivalDate: this.state.arrivalDate
      }
      this.props.updateBooking(tempBooking)
      e.preventDefault()
    }
  
    _handleDelete(e) {
      this.props.deleteBooking()
      e.preventDefault()
    }
  
    render() {
      if (this.props.viewFormVisibility === true) {
        var viewFormState = { 'display': 'block' }
      } else {
        var viewFormState = { 'display': 'none' }
      }
  
      return (
        <div>
          fdsfdsfdf
          <form style={viewFormState}>
            <h4>View Booking</h4>
            <div className='form-group row'>
              <label className='col-2 col-form-label'>Pitch</label>
              <div className='col-10'>
                <input value={this.state.pitch} onChange={this._handleInputChange} className='form-control' name='pitch' ref='inputPitch' type='number' id='example-number-input' />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-2 col-form-label'>First Name</label>
              <div className='col-10'>
                <input value={this.state.firstName} onChange={this._handleInputChange} className='form-control' ref='firstName' name='firstName' type='text' id='example-text-input' />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-2 col-form-label'>Email</label>
              <div className='col-10'>
                <input value={this.state.email} onChange={this._handleInputChange} className='form-control' ref='inputEmail' type='email' name='email' id='example-email-input' />
              </div>
            </div>
  
            <div className='form-group row'>
              <label className='col-2 col-form-label'>Date</label>
              <div className='col-10'>
                <input value={this.state.arrivalDate} onChange={this._handleInputChange} className='form-control' ref='arrivalDate' name='arrivalDate' type='date' id='example-date-input' />
              </div>
            </div>
            <button type='submit' className='btn btn-primary' onClick={this._handleUpdateBooking}>Save changes</button>
            <button className='btn btn-danger' onClick={this._handleUpdateClose}>Close</button>
            <button onClick={this._handleDelete} className='btn btn-danger'>Delete</button>
          </form>
        </div>
      )
    }
  }