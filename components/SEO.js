import Head from 'next/head';
import React from 'react';

const SEO = ({ title, desc }) => {
	const actualTitle = `${
		`${title}` || 'Birendra Dewal'
	} - Birendra Dewal Portfolio`;

	return (
		<Head>
			<title>{actualTitle}</title>
			<meta charSet="utf-8" />
			<meta name="description" content={desc} />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
};

export default SEO;
