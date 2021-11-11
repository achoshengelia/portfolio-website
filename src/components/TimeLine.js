import React from 'react';
import styled from 'styled-components';
import TimeLineItem from './TimeLineItem';
import TimeLineData from './TimeLineData';
import { Section, SectionText, SectionTitle } from '../styles/GlobalComponents';

const Container = styled.div`
	position: relative;
	margin-top: 5em;
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	/* grid-template-rows: repeat(4, 1fr); */
	/* grid-column-gap: 0px;
	grid-row-gap: 0px; */
	/* gap: 5em; */
	& > * + * {
		margin-top: 5em;
	}

	&::after {
		content: '';
		position: absolute;
		background-color: ${(props) => props.theme.colors.primaryPink};
		width: 0.4rem;
		height: 100%;
		justify-self: center;
		z-index: -1;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		&::after {
			content: none;
		}
		display: flex;
		overflow: auto;
		min-height: 12rem;
		/* gap: 3em; */
		padding: 0 2em;
		/* white-space: nowrap; */
	}
`;

const Timeline = () => {
	return (
		<React.Fragment>
			<Section id="about">
				<SectionTitle main>About Me</SectionTitle>
				<SectionText main>
					I started my journey to become a web developer at the end of 2020.
					Since I discovered coding, it has become my new passion and
					professional interest. For me, having enthusiasm and joy are crucial
					factors when choosing a line of work. Developing apps for the web do
					satisfy my demands.
				</SectionText>
				<Container>
					{TimeLineData.map((data, i) => (
						<TimeLineItem key={i} data={data} />
					))}
				</Container>
			</Section>
		</React.Fragment>
	);
};

export default Timeline;
