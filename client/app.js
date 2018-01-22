import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader' // eslint-disable-line
import App from 'containers/App.jsx'  // eslint-disable-line
import { BrowserRouter } from 'react-router-dom' // eslint-disable-line

// ReactDOM.hydrate(<App />, document.getElementById('root'))

const root = document.getElementById('root');
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </AppContainer>,
    root,
  );
}

render(App)

if (module.hot) {
  module.hot.accept('./containers/App.jsx', () => {
    const NextApp = require('./containers/App.jsx').default  // eslint-disable-line
    // ReactDOM.hydrate(<NextApp />, document.getElementById('root'))
    render(NextApp)
  });
}
