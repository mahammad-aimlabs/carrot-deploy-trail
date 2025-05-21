import { API_AMOUNT_MULTIPLIER } from 'constants-shared/bet';
import { rgsFetcher } from 'rgs-fetcher';

export * from './types';

export const requestAuthenticate = async (options: {
	sessionID: string;
	gameID: string;
	rgsUrl: string;
	language: string;
}) => {
	const data = await rgsFetcher.post({
		rgsUrl: options.rgsUrl,
		url: '/wallet/authenticate',
		variables: {
			gameID: options.gameID,
			sessionID: options.sessionID,
			language: options.language,
		},
	});

	return data;
};

export const requestEndRound = async (options: {
	gameID: string;
	sessionID: string;
	rgsUrl: string;
}) => {
	const data = await rgsFetcher.post({
		rgsUrl: options.rgsUrl,
		url: '/wallet/end-round',
		variables: {
			gameID: options.gameID,
			sessionID: options.sessionID,
		},
	});

	return data;
};

export const requestEndEvent = async (options: {
	gameID: string;
	sessionID: string;
	eventIndex: number;
	rgsUrl: string;
}) => {
	const data = await rgsFetcher.post({
		rgsUrl: options.rgsUrl,
		url: '/bet/event',
		variables: {
			gameID: options.gameID,
			sessionID: options.sessionID,
			event: `${options.eventIndex}`,
		},
	});

	return data;
};

export const requestForceResult = async (options: {
	gameID: string;
	mode: string;
	search: {
		bookID?: number;
		kind?: number;
		symbol?: string;
		hasWild?: boolean;
		wildMult?: number;
		gameType?: string;
	};
	rgsUrl: string;
}) => {
	const data = await rgsFetcher.post({
		rgsUrl: options.rgsUrl,
		url: '/game/search',
		variables: {
			gameID: options.gameID,
			mode: options.mode,
			search: options.search,
		},
	});

	return data;
};

export const requestBet = async (options: {
	gameID: string;
	sessionID: string;
	currency: string;
	amount: number;
	mode: string;
	rgsUrl: string;
}) => {
	const data = await rgsFetcher.post({
		rgsUrl: options.rgsUrl,
		url: '/wallet/play',
		variables: {
			gameID: options.gameID,
			mode: options.mode,
			currency: options.currency,
			sessionID: options.sessionID,
			amount: options.amount * API_AMOUNT_MULTIPLIER,
		},
	});

	return data;
};
