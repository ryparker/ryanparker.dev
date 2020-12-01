import PropTypes from 'prop-types';
import React from 'react';
import ReactTyped from 'react-typed';
import {TerminalWrapper} from './styles';

const terminalLinePrefix = '> ';

const Terminal = ({actions}) => {
	const formattedActions = actions.map(({command, response}) => `\`${terminalLinePrefix}\`^250 ${command}<br/>^250 \`<span class='response'>${response}</span><br/>${terminalLinePrefix}\` ^5000 <span class='command'>clear</span>`);

	return (
		<TerminalWrapper>
			<ReactTyped
				loop
				showCursor
				fadeOut
				fadeOutDelay={0}
				backDelay={0}
				typeSpeed={70}
				strings={formattedActions}
			/>
		</TerminalWrapper>
	);
};

Terminal.propTypes = {
	actions: PropTypes.array.isRequired
};

export default Terminal;
