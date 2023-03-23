import Action from './types/Action';
import { State } from './types/types';

const init = {
    user: {},
    message: '',
};
const reducer = (state:State = init, action:Action) => {
switch (action.type) {

    case 'REGISTRATION':
        if ('message' in action.payload) {
            return {
                ...state,
            message: action.payload.message
            };
        }
            return {
                ...state,
                user: action.payload
            };

    case 'AUTHORIZATION':
    if ('message' in action.payload) {
        return {
            ...state,
        message: action.payload.message
        };
    }
        return {
            ...state,
            user: action.payload
        };

    case 'LOGOUT':
        if ('message' in action.payload) {
            return {
                ...state,
            message: action.payload.message
            };
        }
            return {
                ...state,
                user: action.payload
            };

case 'VERIFICATION':
    if ('id' in action.payload) {
        return {
            ...state,
        user: action.payload
        };
    }
        return state;

    default:
        return state;
}
};

export default reducer;