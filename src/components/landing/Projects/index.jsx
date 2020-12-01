import {Card, Container} from 'Common';
import {Content, Grid, ProjectWrapper, Stats, Wrapper} from './styles';
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
		<Wrapper id="projects">
			<h2>Projects</h2>
			<ProjectWrapper as={Container}>
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
			</ProjectWrapper>
		</Wrapper>
	);
};
