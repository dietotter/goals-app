import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Root } from 'root' // allowed to write like this (w/o './root') by tsconfig options baseUrl and paths

ReactDOM.render(<Root />, document.getElementById('app') as HTMLElement)
