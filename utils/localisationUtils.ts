import { defaultsDeep } from 'lodash';

import { EN } from 'static/labels/english';

const langStrings = {
	en: EN,
	fr: () => require('static/labels/english'),
};

const langExportNameMap = {
	en: 'EN',
	fr: 'FR',
	it: 'IT',
	es: 'ES',
	de: 'DE',
	pt: 'PT',
	nl: 'NL',
	ja: 'JA',
	ko: 'KO',
	'zh-hans': 'ZH_HANS',
	'zh-hant': 'ZH_HANT',
};

export const getLocaleStrings = async ({ lang }) => {
	if (lang === 'en' || !(lang in langStrings)) {
		return EN;
	}
	const localeStrings = (await langStrings[lang]())[langExportNameMap[lang]];
	return defaultsDeep(localeStrings, EN);
};
