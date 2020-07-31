import React from 'react';
import ReactTyped from 'react-typed';
import {TypeArea} from './styles';

const baseText = 'I’m <span class=\'accent\'>Ryan Parker</span>.<br/>';

const Typed = () => (
	<TypeArea>
		<ReactTyped
			loop
			smartBackspace
			showCursor
			typeSpeed={25}
			backSpeed={15}
			strings={[
				baseText,
				`${baseText}I’m an <span class='accent'>Automation Engineer</span>.`,
				`${baseText}I specialize in <span class='accent'>Testing Frameworks</span>.`,
				`${baseText}I specialize in <span class='accent'>Development Tooling</span>.`,
				`${baseText}I specialize in <span class='accent'>CI/CD Infrastructure</span>.`,
				`${baseText}I specialize in <span class='accent'>Realtime Dashboards</span>.`
			]}
			backDelay={1000}
			loopCount={0}
			cursorChar="|"
			className="typed"
		/>
	</TypeArea>
);

export default Typed;
