const BASE_URL_HTML =
	'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/shared-asset-package/ui-slots/2.0';

// popups
const button_decrease_default = `${BASE_URL_HTML}/button_decrease_default.webp` as const;
const button_decrease_disable = `${BASE_URL_HTML}/button_decrease_disable.webp` as const;
const button_decrease_hover = `${BASE_URL_HTML}/button_decrease_hover.webp` as const;
const button_increase_default = `${BASE_URL_HTML}/button_increase_default.webp` as const;
const button_increase_disable = `${BASE_URL_HTML}/button_increase_disable.webp` as const;
const button_increase_hover = `${BASE_URL_HTML}/button_increase_hover.webp` as const;

const circle_decrease_default = `${BASE_URL_HTML}/circle_decrease_default.webp` as const;
const circle_decrease_disabled = `${BASE_URL_HTML}/circle_decrease_disable.webp` as const;
const circle_decrease_hover = `${BASE_URL_HTML}/circle_decrease_hover.webp` as const;
const circle_decrease_click = `${BASE_URL_HTML}/circle_decrease_click.webp` as const;

const circle_increase_default = `${BASE_URL_HTML}/circle_increase_default.webp` as const;
const circle_increase_disabled = `${BASE_URL_HTML}/circle_increase_disable.webp` as const;
const circle_increase_hover = `${BASE_URL_HTML}/circle_increase_hover.webp` as const;
const circle_increase_click = `${BASE_URL_HTML}/circle_increase_click.webp` as const;

const buy_base_1 = `${BASE_URL_HTML}/buy_base_1.webp` as const;
const icon_exit = `${BASE_URL_HTML}/icon_exit.webp` as const;
const volumeOn = `${BASE_URL_HTML}/volumeOn.webp` as const;
const volumeOff = `${BASE_URL_HTML}/volumeOff.webp` as const;
const rtp_badge = `${BASE_URL_HTML}/rtp_badge.webp` as const;

const buybutton_active = `${BASE_URL_HTML}/buybutton_active.png` as const;
const buybutton_click = `${BASE_URL_HTML}/buybutton_click.webp` as const;
const buybutton_default = `${BASE_URL_HTML}/buybutton_default.webp` as const;
const buybutton_disabled = `${BASE_URL_HTML}/buybutton_disabled.webp` as const;
const buybutton_hover = `${BASE_URL_HTML}/buybutton_hover.webp` as const;

const sharedAssetsHtml = {
	button_decrease_default,
	button_decrease_disable,
	button_decrease_hover,
	button_increase_default,
	button_increase_disable,
	button_increase_hover,
	circle_decrease_default,
	circle_decrease_disabled,
	circle_decrease_hover,
	circle_decrease_click,
	circle_increase_default,
	circle_increase_disabled,
	circle_increase_hover,
	circle_increase_click,
	buy_base_1,
	icon_exit,
	volumeOn,
	volumeOff,
	rtp_badge,

	buybutton_active,
	buybutton_click,
	buybutton_default,
	buybutton_disabled,
	buybutton_hover,
};

export { sharedAssetsHtml };

export type KeyOfSharedAssetsHtml = keyof typeof sharedAssetsHtml;
