const React = require('react');
const ReactDOM = require('react-dom');

require('./index.css');

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
