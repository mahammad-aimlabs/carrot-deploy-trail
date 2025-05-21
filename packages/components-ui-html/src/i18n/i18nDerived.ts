import { i18n } from '@lingui/core';

export const i18nDerived = {
	bet: () => i18n._(i18n.t('BET')),
	max: () => i18n._(i18n.t('MAX')),
	betMenu: () => i18n._(i18n.t('BET MENU')),
	selectYourBet: () => i18n._(i18n.t('SELECT YOUR BET')),
	confirm: () => i18n._(i18n.t('CONFIRM')),
	masterVolume: () => i18n._(i18n.t('MASTER VOLUME')),
	musicVolume: () => i18n._(i18n.t('MUSIC VOLUME')),
	soundEffectVolume: () => i18n._(i18n.t('SOUND EFFECT VOLUME')),
	autoSpins: () => i18n._(i18n.t('AUTO SPINS')),
	numberOfRounds: () => i18n._(i18n.t('NUMBER OF ROUNDS')),
	advanced: () => i18n._(i18n.t('ADVANCED')),
	singleWinLimit: () => i18n._(i18n.t('SINGLE WIN LIMIT')),
	lossLimit: () => i18n._(i18n.t('LOSS LIMIT')),
	startAutoplay: () => i18n._(i18n.t('START AUTOPLAY')),
	notification: () => i18n._(i18n.t('NOTIFICATION')),
	autoSpinsStopInfo: () => i18n._(i18n.t('AUTO PLAY HAS STOPPED DUE TO')),
	insufficientFunds: () =>
		i18n._(
			i18n.t(
				'INSUFFICIENT FUNDS TO PLACE THIS BET. PLEASE ADD FUNDS TO YOUR ACCOUNT OR LOWER THE BET LEVEL.',
			),
		),
	lossLimitReached: () => i18n._(i18n.t('LOSS LIMIT REACHED')),
	singleWinLimitReached: () => i18n._(i18n.t('SINGLE WIN LIMIT REACHED')),
	settings: () => i18n._(i18n.t('SETTINGS')),
};
