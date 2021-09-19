import React, { useEffect } from 'react'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom'

import ListTiger from './tigers/ListTiger'

import { useQuery } from 'react-query'

import client, { fetchCSRFToken, hasCSRFToken } from './api'
import LoginPage from './auth/LoginPage'
import RegisterPage from './auth/RegisterPage'
import GlobalStyles from './App.styled'
import AppLayout from './shared/AppLayout'

function App() {
  const history = useHistory()
  useQuery('user', () => client.get('/auth/me').then(({ data }) => data), {
    retry: false,
    onError: () => history.replace('/login'),
  })

  useEffect(() => {
    if (!hasCSRFToken()) fetchCSRFToken()
  }, [])

  return (
    <>
      <GlobalStyles />
      <Switch>
        <Redirect from='/' exact to='/tigers' />
        {/* auth routes */}
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <AppLayout>
          <Route path='/tigers' component={ListTiger} />
        </AppLayout>
      </Switch>
    </>
  )
}

export default App
