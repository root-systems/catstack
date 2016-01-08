import { createActions } from 'feathers-action'

import client from 'app/client'

import { Todos } from './models'

export default createActions(client, Todos)
