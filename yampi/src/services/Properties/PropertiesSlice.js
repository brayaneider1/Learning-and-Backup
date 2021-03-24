import { createSlice } from '@reduxjs/toolkit';
import asyncActions from './PropertiesActions';

const initialState = {
  status: null,
  errormsg: null,
  properties: [],
}

const propertiesSlice = createSlice({
  name: "properties",
  initialState: initialState,
  reducers: {
    onChangeStatus(state, { payload }) {
      state.status = payload;
    },
    onError(state, { payload }) { 
      state.status = 'error';
      state.errormsg= payload;
    },
    setProperties(state, { payload }) {
      state.properties = payload;
    },
  }
});

const propertiesActions = { ...propertiesSlice.actions, ...asyncActions }
const propertiesReducer = propertiesSlice.reducer

export { propertiesActions, propertiesReducer};