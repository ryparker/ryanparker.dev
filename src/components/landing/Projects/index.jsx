import {Card, Container} from 'Common';
import {Content, Grid, Item, Stats, Wrapper} from './styles';
import {graphql, useStaticQuery} from 'gatsby';

import React from 'react';
import forkIcon from 'Static/icons/fork.svg';
import starIcon from 'Static/icons/star.svg';

export const Projects = () => {
	const {
		github: {
			user: {
				pinnedItems: {nodes}
			}
		}
	} = useStaticQuery(graphql`
		{
			github {
				user(login: "ryparker") {
					pinnedItems(first: 6) {
						nodes {
							... on GitHub_Repository {
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
		}
	`);

	return (
		<Wrapper as={Container} id="projects">
			<h2>Projects</h2>
			<Grid>
				{nodes.map(node => (
					<Item key={node.id} as="a" href={node.url} target="_blank" rel="noopener noreferrer">
						<Card>
							<Content>
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
					</Item>
				))}
			</Grid>
		</Wrapper>
	);
};
