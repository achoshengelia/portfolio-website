import React from 'react';
import { Section, SectionTitle } from '../styles/GlobalComponents';
import projects from './ProjectsData';
import styled from 'styled-components';
import ProjectsItem from './ProjectsItem';

const GridContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	padding: 4rem 0 2rem 0.5rem;
	place-items: start;
	column-gap: 20rem;
	row-gap: 10rem;
	@media screen and (max-width: 1100px) {
		align-items: center;
		justify-items: center;
	}
	@media screen and (max-width: 375px) {
		align-items: center;
		justify-items: start;
	}
`;
const Projects = () => {
	return (
		<Section id="projects">
			<SectionTitle main>Projects</SectionTitle>
			<GridContainer>
				{projects.map((data, i) => (
					<ProjectsItem key={i} data={data} />
				))}
			</GridContainer>
		</Section>
	);
};

export default Projects;
