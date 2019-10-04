import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Layout } from 'module/Layout'

import { routes } from 'screen'

interface IProps {}

export const Router: React.FC<IProps> = () => {
  return (
    <BrowserRouter forceRefresh={false}>
      <Layout>
        <Switch>
          {routes.map(props => {
            return <Route {...props} key={props.path} />
          })}
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}
