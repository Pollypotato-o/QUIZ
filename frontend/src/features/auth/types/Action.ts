import type { Message, User } from './types';

type Action =
   { type: 'AUTHORIZATION'; payload:User | Message }
 | { type: 'REGISTRATION'; payload:User | Message }
 | { type: 'LOGOUT'; payload: Message }
 | { type:'VERIFICATION'; payload:User | Message };

export default Action;