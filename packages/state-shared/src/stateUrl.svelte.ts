import { locales } from 'config-lingui';
import { page } from '$app/state';

export type Language = (typeof locales)[number];

export type Key = 'lang' | 'gameID' | 'sessionID' | 'rgs_url' | 'socialCasino' | 'force';

const getUrlSearchParam = (key: Key) => page.url.searchParams.get(key);

const lang = () =>
	getUrlSearchParam('lang') === 'br' ? 'pt' : (getUrlSearchParam('lang') as Language) || 'en';
const gameID = () => getUrlSearchParam('gameID') || '';
const sessionID = () => getUrlSearchParam('sessionID') || '';
const rgsUrl = () => getUrlSearchParam('rgs_url') || '';
const socialCasino = () => getUrlSearchParam('socialCasino') === 'true';
const force = () => getUrlSearchParam('force') === 'true';

export const stateUrlDerived = {
	lang,
	gameID,
	sessionID,
	rgsUrl,
	socialCasino,
	force,
};
