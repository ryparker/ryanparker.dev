import {Card, Container} from 'Common';
import {Content, Grid, Stats, Wrapper} from './styles';
import {graphql, useStaticQuery} from 'gatsby';

import React from 'react';
import forkIcon from 'Static/icons/fork.svg';
import starIcon from 'Static/icons/star.svg';

export const Stars = () => {
	const {
		github: {
			user: {
				starredRepositories: {nodes}
			}
		}
	} = useStaticQuery(graphql`
		{
			github {
				user(login: "ryparker") {
					starredRepositories(first: 3, orderBy: {field: STARRED_AT, direction: DESC}) {
						nodes {
							id
							name
							url
							description
							forkCount
							stargazers {
								totalCount
							}
						}
					}
				}
			}
		}
	`);
	return (
		<Wrapper as={Container} id="Stars">
			<h2>Recently Starred</h2>
			<Grid>
				{nodes.map(node => (
					<Card key={node.id} style={{cursor: 'pointer'}} onClick={() => window.open(node.url, '_blank')}>
						<Content data-cy="content">
							<h4>{node.name}</h4>
							<p>{node.description}</p>
						</Content>
						<Stats>
							<div>
								<img src={starIcon} alt="stars"/>
								<span>{node.stargazers.totalCount}</span>
							</div>
							<div>
								<img src={forkIcon} alt="forks"/>
								<span>{node.forkCount}</span>
							</div>
						</Stats>
					</Card>
				))}
			</Grid>
		</Wrapper>
	);
};
