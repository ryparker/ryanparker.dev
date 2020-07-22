import {Details, Flex, Links, Wrapper} from './styles';

import {Container} from 'Common';
import React from 'react';
import social from './social.json';

export const Footer = () => (
	<Wrapper>
		<Flex as={Container}>
			<Details>
				<h2>Ryan Parker</h2>
				<span>
					© All rights are reserved | {new Date().getFullYear()} |{' '}
					<a href="https://github.com/ryparker/ryanparker.dev">Like the site? Check out the source code</a>
				</span>
			</Details>
			<Links>
				{social.map(({id, name, link, icon}) => (
					<a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
						<img width="24" src={icon} alt={name}/>
					</a>
				))}
			</Links>
		</Flex>
	</Wrapper>
);
