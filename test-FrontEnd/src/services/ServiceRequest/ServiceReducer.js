import { handleActions } from 'redux-actions'
/* import { Token } from '../../common/Storage/Token' */

export const INITIAL_STATE = {
	loading: false,
	success: [],
	message: undefined,
	services:undefined,
	councils:undefined,
	error: {
		setService: undefined,
		setService: undefined,
	},
}

const reducer = handleActions(
	{
		SERVICE: {
			GET_SERVICE: (state, { payload: {} }) => ({
				...state,
				loading: true,
				error: { ...state.error, setService: false },
				successes: { ...state.successes, setService: false },
			}),
			GET_SERVICE_RESPONSE: {
				next(state, { payload:{services}}) {
					return {
						...state,
						services,
						loading: false,
						error: { ...state.error, setService: false },
						successes: { ...state.successes, setService: true },
					}
				},
				throw(state, { error, payload: { message } }) {
					return {
						...state,
						loading: false,
						message,
						error: { ...state.error, setService: true },
						successes: { ...state.successes, setService: false },
					}
				},
			},
			GET_COUNCILS: (state, { payload: {} }) => ({
				...state,
				loading: true,
				error: { ...state.error, setService: false },
				successes: { ...state.successes, setService: false },
			}),
			GET_COUNCILS_RESPONSE: {
				next(state, { payload:{councils}}) {
					return {
						...state,
						councils,
						loading: false,
						error: { ...state.error, setService: false },
						successes: { ...state.successes, setService: true },
					}
				},
				throw(state, { error, payload: { message } }) {
					return {
						...state,
						loading: false,
						message,
						error: { ...state.error, setService: true },
						successes: { ...state.successes, setService: false },
					}
				},
			},
		
		},
	},
	INITIAL_STATE
)

export default reducer
