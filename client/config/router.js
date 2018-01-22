import React from 'react'
import {
  Route,
  Redirect,
} from 'react-router-dom'
import TopicList from 'containers/toppic-list/index'
import TopicDetail from 'containers/toppic-detail/index'

export default () => [
  <Route path="/" render={() => <Redirect to="/list" />} exact />,
  <Route path="/list" component={TopicList} exact />,
  <Route path="/detail" component={TopicDetail} />,
]
