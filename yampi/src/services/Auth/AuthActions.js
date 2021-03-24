import createAction from '../../common/utils/create-action';

const asyncActions = createAction({
  auth: [
    'login',
    'signup',
    'confirm',
    'resendCode',
    'recoveryPassword',
    'checkIsAuth',
    'fetchUser'
  ]
})
export default asyncActions