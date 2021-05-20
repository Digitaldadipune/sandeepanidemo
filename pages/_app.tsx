import { ThemeProvider } from 'styled-components';
import { useEffect } from 'react';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

import { AppGlobalStyles } from 'components/GlobalStyle';

import { strings } from 'const/string';
import theme from 'static/theme';
import { getLocaleStrings } from 'utils/localisationUtils';

const App = ({ Component, pageProps, localizedStrings }) => {
	useEffect(() => {
		strings.setContent({
			default: localizedStrings,
		});
	}, [localizedStrings]);

	return (
		<RecoilRoot>
			<ThemeProvider theme={theme}>
				<Head>
					<link rel="shortcut icon" href="/favicon.png" />
				</Head>
				<AppGlobalStyles />
				<Component {...pageProps} />
			</ThemeProvider>
		</RecoilRoot>
	);
};

App.getInitialProps = async ({ Component, ctx }) => {
	const { query } = ctx;
	const lang = query.lang || 'en';
	const localizedStrings = await getLocaleStrings({ lang });
	const pageProps = Component.getInitialProps
		? await Component.getInitialProps(ctx)
		: {};

	return { localizedStrings, pageProps };
};

export default App;
