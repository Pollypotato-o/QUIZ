import { Message, User } from './types/types';

export const registration = async (obj:User):Promise<User | Message> => {
    const res = await fetch('http://localhost:4000/api/auth/sign_up', {
         method: 'POST',
         credentials: 'include',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(obj)
     });
     return res.json();
 };

 export const authorization = async (obj:User):Promise<User | Message> => {
    const res = await fetch('http://localhost:4000/api/auth/sign_in', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(obj)
     });
     return res.json();
 };
 export const verification = async ():Promise<User | Message> => {
    const res = await fetch('http://localhost:4000/api/auth/verification', { credentials: 'include', });
     return res.json();
 };