//misal root filenya store.js

import { createStore } from 'redux'
import shopReducer from '../reducer/Reducer'

//variabel penyimpan
export const store = createStore(shopReducer)