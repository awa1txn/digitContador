// place files you want to import through the `$lib` alias in this folder.
import { writable } from 'svelte/store';
// import { getAuthLocals } from 'svelte-google-auth/server'


export const email = writable('');
export const authStage = writable(false);
export const authSuccess = writable(false);
export const networth = writable([]);
