const React = require('react')
const { BrowserRouter, Match } = require('react-router')
const Service = require('./components/service')

const Home = require('./pages/home')
const About = require('./pages/about')
const Efforts = require('./pages/efforts')

const App = React.createClass({
  render() {
    return (
      <BrowserRouter>
        <div>
            <Match exactly pattern="/" component={Home} />
            <Match pattern="/about" component={About} />
            <Match exactly pattern="/efforts" component={Service(Efforts)} />
        </div>
      </BrowserRouter>
    )
  }
})

module.exports = App
