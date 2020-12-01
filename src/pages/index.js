import {Contact, Intro, Projects, Roadmap, Stars} from 'Components/landing';
import {Layout, Seo} from 'Common';

import React from 'react';

const App = () => (
	<Layout>
		<Seo/>
		<Intro/>
		<Projects/>
		<Stars/>
		<Roadmap/>
		<Contact/>
	</Layout>
);

export default App;
