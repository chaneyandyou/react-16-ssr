import {
  Link,
} from 'react-router-dom'
import React from 'react';
import Routes from 'config/router'

class App extends React.Component {
  componentDidMount() {

  }

  render() {
    return [
      <div key="123">
        <Link to="/">首页</Link>
        <Link to="/detail">详情页</Link>
      </div>,
      <Routes key="3999" />,
    ];
  }
}

export default App;
