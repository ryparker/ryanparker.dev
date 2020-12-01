import {Card, Container} from 'Common';
import {
	Content,
	RoadmapWrapper,
	Row,
	Thumbnail,
	Wrapper
} from './styles';
import {graphql, useStaticQuery} from 'gatsby';

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
			<h2>Roadmap</h2>
			<RoadmapWrapper as={Container}>
				<Row>
					<Thumbnail>
						<img src={roadmap} alt="Man presenting analytics"/>
					</Thumbnail>
					<Card>
						<Content data-cy="content">
							<h4>On Deck</h4>
							<ul>
								{onDeckCards.map(card => (
									<li key={card.id} data-cy="content">{card.note}</li>
								))}
							</ul>
						</Content>
					</Card>
				</Row>
				<Card>
					<Content data-cy="content">
						<h4>Recently Completed</h4>
						<ul>
							{doneCards.map(card => (
								<li key={card.id} data-cy="content">{card.note}</li>
							))}
						</ul>
					</Content>
				</Card>
			</RoadmapWrapper>
		</Wrapper>
	);
};
