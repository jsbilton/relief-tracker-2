const React = require('react')
const { Link } = require('react-router')

const Efforts = React.createClass({
  getInitialState: function() {
    return {
      efforts: []
    }
  },
  componentDidMount() {
    this.props.allDocs('efforts', (e, efforts) => {

      if (e) return console.log(e.message)
      this.setState({efforts})
    })
  },
  render() {
    return (
      <div>
          <h3>Efforts</h3>
          <Link to="/efforts/new">New Effort</Link>
          <ul>
            {this.state.efforts.map(effort =>

            <li key={effort.id}>{effort.name}</li>
            )}
          </ul>
          <Link to="/">Home</Link>
      </div>
    )
  }
})

module.exports = Efforts
