import { combineReducers } from '@reduxjs/toolkit'
import { authReducer } from '../services/Auth/AuthSlice';
import { propertiesReducer } from '../services/Properties/PropertiesSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  properties: propertiesReducer
})

export default rootReducer