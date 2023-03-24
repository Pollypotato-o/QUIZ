/* eslint-disable @typescript-eslint/default-param-last */
import { act } from 'react-dom/test-utils';
import type Action from './types/Action';
import type { State } from './types/types';

const init: State = {
  user: undefined,
  message: '',
};
const reducer = (state: State = init, action: Action): State => {
  switch (action.type) {
    case 'REGISTRATION':
      if ('message' in action.payload) {
        return {
          ...state,
          message: action.payload.message,
        };
      }
      return {
        ...state,
        user: action.payload,
      };

    case 'AUTHORIZATION':
      if ('message' in action.payload) {
        return {
          ...state,
          message: action.payload.message,
        };
      }
      return {
        ...state,
        user: action.payload,
      };

    case 'LOGOUT':
         if ('message' in action.payload) {
            return {
                ...state,
                user: undefined
            }
         }
         return state
    case 'VERIFICATION':
      if ('id' in action.payload) {
        return {
          ...state,
          user: action.payload,
        };
      }
      return state;

    default:
      return state;
  }
};

export default reducer;
