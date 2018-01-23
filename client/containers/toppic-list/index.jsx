import React from 'react'
import PropTypes from 'prop-types'
import {
  observer,
  inject,
} from 'mobx-react'
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

  changeName(e) {
    this.props.appState.changeName(e.target.value)
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.changeName} />
        <div>{this.props.appState.msg}</div>
      </div>
    );
  }
}

ToppicList.propTypes = {
  appState: PropTypes.instanceOf(AppState),
}

