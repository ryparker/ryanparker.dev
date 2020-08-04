import {
	Details,
	Grid,
	Item,
	Thumbnail,
	Wrapper
} from './styles';
import {graphql, useStaticQuery} from 'gatsby';

import {Card} from 'Common';
import React from 'react';
import roadmap from 'Static/illustrations/roadmap.svg';

export const Roadmap = () => {
	const {
		github: {
			user: {
				project: {
					columns: {nodes}
				}
			}
		}
	} = useStaticQuery(graphql`
		{
			github {
				user(login: "ryparker") {
					project(number: 1) {
						columns(first: 10) {
							nodes {
								name
								cards(first: 10, archivedStates: NOT_ARCHIVED) {
									nodes {
										id
										note
									}
								}
							}
						}
					}
				}
			}
		}
	`);

	const onDeckCards = nodes.find(column => column.name === 'On deck').cards.nodes;
	const doneCards = nodes.find(column => column.name === 'Done').cards.nodes;

	return (
		<Wrapper id="roadmap">
			<Thumbnail>
				<img src={roadmap} alt="Man presenting analytics"/>
			</Thumbnail>
			<Details>
				<h2>Roadmap</h2>
				<Grid>
					<Item>
						<Card>
							<h3>On Deck</h3>
							<ul>
								{onDeckCards.map(card => (
									<li key={card.id}>{card.note}</li>
								))}
							</ul>
						</Card>
					</Item>
					<Item>
						<Card>
							<h3>Recently Completed</h3>
							<ul>
								{doneCards.map(card => (
									<li key={card.id}>{card.note}</li>
								))}
							</ul>
						</Card>
					</Item>
				</Grid>
			</Details>
		</Wrapper>
	);
};
