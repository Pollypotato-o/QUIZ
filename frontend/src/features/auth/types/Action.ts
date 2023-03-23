import { Message, User } from './types';

type Action =
   { type: 'AUTHORIZATION'; payload:User | Message }
 | { type: 'REGISTRATION'; payload:User | Message }
 | { type: 'LOGOUT'; payload:User | Message }
 | { type:'VERIFICATION'; payload:User | Message };

export default Action;