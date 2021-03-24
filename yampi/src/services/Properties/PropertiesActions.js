import createAction from '../../common/utils/create-action';

const asyncActions = createAction({
  properties: [
    'getAll',
    'search'
  ]
})
export default asyncActions