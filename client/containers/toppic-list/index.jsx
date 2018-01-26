import React from 'react'
import PropTypes from 'prop-types'
import {
  observer,
  inject,
} from 'mobx-react'
import Helmet from 'react-helmet'
import { AppState } from 'store/app-state'

@inject('appState')
@observer

export default class ToppicList extends React.Component {
  constructor() {
    super()
    this.changeName = this.changeName.bind(this)
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  asyncBootstrap() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.props.appState.count = 3
        resolve(true)
      })
    })
  }

  changeName(e) {
    this.props.appState.changeName(e.target.value)
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>this is topic list</title>
          <meta name="description" content="this is description" />
        </Helmet>
        <input type="text" onChange={this.changeName} />
        <div>{this.props.appState.msg}</div>
      </div>
    );
  }
}

ToppicList.propTypes = {
  appState: PropTypes.instanceOf(AppState),
}

