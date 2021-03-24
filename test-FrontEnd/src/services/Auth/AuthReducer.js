import { handleActions } from 'redux-actions'
/* import { Token } from '../../common/Storage/Token' */

export const INITIAL_STATE = {
	loading: false,
	success: [],
	message: undefined,
	error: {
		setSignup: undefined,
		setLogin: undefined,
	},
	successes: {
		setSignup: undefined,
		setLogin: undefined,
	},
}

const reducer = handleActions(
	{
		AUTH: {
			LOGIN: (state, { payload: {} }) => ({
				...state,
				loading: true,
				error: { ...state.error, setLogin: false },
				successes: { ...state.successes, setLogin: false },
			}),
			LOGIN_RESPONSE: {
				next(state, { payload}) {
					return {
						...state,
						authentication: true,
						loading: false,
						error: { ...state.error, setLogin: false },
						successes: { ...state.successes, setLogin: true },
					}
				},
				throw(state, { error, payload: { message } }) {
					return {
						...state,
						loading: false,
						message,
						error: { ...state.error, setLogin: true },
						successes: { ...state.successes, setLogin: false },
					}
				},
			},
			SIGNUP: (state, { payload: {} }) => ({
				...state,
				loading: true,
				error: { ...state.error, setSignup: false },
				successes: { ...state.successes, setSignup: false },
			}),
			SIGNUP_RESPONSE: {
				next(state, { payload: { success } }) {
					return {
						...state,
						loading: false,
						success,
						error: { ...state.error, setSignup: false },
						successes: { ...state.successes, setSignup: true },
					}
				},
				throw(state, { error, payload: { message } }) {
					return {
						...state,
						error: { ...state.error, setSignup: true },
						successes: { ...state.successes, setSignup: false },
						message,
						loading: false,
					}
				},
			},
		},
	},
	INITIAL_STATE
)

export default reducer
