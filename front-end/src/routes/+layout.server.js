// @ts-nocheck
import { redirect } from '@sveltejs/kit';
import { generateAuthUrl, hydrateAuth, isSignedIn } from 'svelte-google-auth/server';
import { ORIGIN, CLIENT_ID, CLIENT_SECRET } from "$env/static/private"

const SCOPES = ['openid', 'profile', 'email'];


export const load = async ({ locals, url }) => {
    locals.client_id = CLIENT_ID;
    locals.client_secret = CLIENT_SECRET
    locals.client._clientId = CLIENT_ID;
    locals.client._clientSecret = CLIENT_SECRET
    locals.client.redirectUri = ORIGIN;
	if (!isSignedIn(locals)) {
		throw redirect(302, generateAuthUrl(locals, url, SCOPES, url.pathname));
	}
	// By calling hydateAuth, certain variables from locals are parsed to the client
	// allowing the client to access the user information and the client_id for login
	return { ...hydrateAuth(locals) };
};