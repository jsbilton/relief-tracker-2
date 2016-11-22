const React = require('react')
const xhr = require('xhr')


/// HIGHER ORDER COMPONENT /////
const Service = (Component) => React.createClass({
  allDocs(model, callback) {
    xhr.get('http://localhost:4000/' + model,
    { json: true }, (e, r, b) => {
      callback(e, b)
    })
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
