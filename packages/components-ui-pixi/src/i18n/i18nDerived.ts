import { i18n } from '@lingui/core';

export const i18nDerived = {
	audio: () => i18n._(i18n.t('AUDIO')),
	balance: () => i18n._(i18n.t('BALANCE')),
	win: () => i18n._(i18n.t('WIN')),
	bet: () => i18n._(i18n.t('BET')),
	stop: () => i18n._(i18n.t('STOP')),
	buyBonus: () => i18n._(i18n.t('BUY BONUS')),
	disable: () => i18n._(i18n.t('DISABLE')),
	freeSpins: () => i18n._(i18n.t('FREE SPINS')),
	//
	decrease: () => i18n._(i18n.t('-')),
	increase: () => i18n._(i18n.t('+')),
	menu: () => i18n._(i18n.t('MENU')),
	turbo: () => i18n._(i18n.t('TURBO')),
	autoSpin: () => i18n._(i18n.t('AUTO SPIN')),
	payTable: () => i18n._(i18n.t('PAYTABLE')),
	info: () => i18n._(i18n.t('INFO')),
	settings: () => i18n._(i18n.t('SETTINGS')),
	soundOn: () => i18n._(i18n.t('SOUND ON')),
	soundOff: () => i18n._(i18n.t('SOUND OFF')),
	menuExit: () => i18n._(i18n.t('EXIT')),
};
