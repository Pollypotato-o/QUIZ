import type { Message, User } from './types/types';

export const registration = async (obj:User):Promise<User | Message> => {
    const res = await fetch('/api/auth/sign_up', {
         method: 'POST',
         credentials: 'include',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(obj)
     });
     return res.json();
 };

 export const authorization = async ({email, password}: {email: string, password: string}):Promise<User | Message> => {
    const res = await fetch('/api/auth/sign_in', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({email, password})
     });
     return res.json();
    };

export const logout = async ():Promise<Message> => {
    const res = await fetch('/api/auth/logout', {
        method: 'POST',
    });
    return res.json();
   };

 export const verification = async ():Promise<User | Message> => {
    const res = await fetch('/api/auth/verification');
    return res.json();
 };