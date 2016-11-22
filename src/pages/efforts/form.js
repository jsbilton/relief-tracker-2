const React = require('react')
const { Link, Redirect } = require('react-router')
const EffortForm = React.createClass({
  getInitialState: function() {
    return {
      effort: {
        name: '',
        location_id: -1
      },
      success: false,
      locations: []
    }
  },
  componentDidMount() {
    this.props.allDocs('locations', (e, locations) => {
      this.setState({locations})
    })
  },
  handleChange(field) {
    return (e) => {
      let effort = this.state.effort
      effort[field] = e.target.value
      this.setState({effort})
    }
  },
  handleSubmit(e) {
    e.preventDefault()
    this.props.post('efforts', this.state.effort, (e, b) => {
      if (e) return console.log(e.message)
      this.setState({success: true})
    })
  },
  render: function() {
    return (
      <div>
      {this.state.success ? <Redirect to="/efforts" /> : null }
        <h3>Effort Form</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name</label>
            <input
                value={this.state.effort.name}
                onChange={this.handleChange('name')}
                type='text'/>
          </div>
          <div>
            <label>Location</label>
            <select
              value={this.state.effort.location_id}
              onChange={this.handleChange('location_id')}>
              <option value="-1">Choose</option>

              {this.state.locations.map(loc =>
                <option key={loc.id}
                value={loc.id}>{loc.name}</option>
              )}

            </select>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
        <Link to="/">Home</Link>
      </div>
    )
  }
})

module.exports = EffortForm
