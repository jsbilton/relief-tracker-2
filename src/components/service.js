const React = require('react')
const xhr = require('xhr')

const Service = (Component) => React.createClass({
  allDocs(model, callback) {
    callback(null, [{
      id: '1',
      name: 'Foo Effort'
    }])
  },
  render() {
    return (
      <Component {...this.props}
        allDocs={this.allDocs}

      />
    )
  }
})

module.exports = Service
