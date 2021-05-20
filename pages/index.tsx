import { useRouter } from 'next/router';

import { indexPageHtml } from 'static/index';

const IndexPage = () => {
	const router = useRouter();
	console.log({ router });
	return <div dangerouslySetInnerHTML={{ __html: indexPageHtml }}></div>;
};

IndexPage.getInitialProps = async () => {};

export default IndexPage;
