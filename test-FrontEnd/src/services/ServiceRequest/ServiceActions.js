import { createActions } from "redux-actions";

export const { service } = createActions({
  SERVICE: {
    GET_SERVICE: () => ({  }),
    GET_SERVICE_RESPONSE: (services) => ({services}),
    GET_COUNCILS:() => ({  }),
    GET_COUNCILS_RESPONSE: (councils) => ({councils}),
  },
});
