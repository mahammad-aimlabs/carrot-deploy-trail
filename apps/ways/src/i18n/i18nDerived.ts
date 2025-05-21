import { i18n } from '@lingui/core';

import { i18nDerived as i18nDerivedUiPixi } from 'components-ui-pixi';
import { i18nDerived as i18nDerivedUiHtml } from 'components-ui-html';

export const i18nDerived = {
	...i18nDerivedUiPixi,
	...i18nDerivedUiHtml,
	home: () => i18n._(i18n.t('HOME')),
	notTranslated: () => i18n._(i18n.t('NOT TRANSLATED')),
};
