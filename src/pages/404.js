import {Layout, Seo} from 'Common';
import React from 'react';

export default () => (
	<Layout>
		<Seo title="404: Not found" location="/404"/>
		<h1>NOT FOUND</h1>
		<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
	</Layout>
);
