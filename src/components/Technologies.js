import React from 'react';
import styled from 'styled-components';
import { DiFirebase, DiReact } from 'react-icons/di';
import { Section, SectionText, SectionTitle } from '../styles/GlobalComponents';

const List = styled.ul`
	list-style-type: none;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	margin: 3rem 0;

	@media ${props => props.theme.breakpoints.lg} {
		margin: 64px 0;
	}

	@media ${props => props.theme.breakpoints.md} {
		margin: 64px 0;
		gap: 24px;
	}

	@media ${props => props.theme.breakpoints.sm} {
		display: flex;
		flex-direction: column;
		margin: 32px 0;
	}
`;

const ListContainer = styled.div`
	display: flex;
	flex-direction: column;

	@media ${props => props.theme.breakpoints.sm} {
		display: flex;
		margin-left: 18px;
	}
`;

const ListTitle = styled.h3`
	font-weight: 700;
	/* font-size: 28px; */
	font-size: clamp(2rem, 0.73rem + 1.34vw, 2.8rem);
	line-height: 32px;
	letter-spacing: 0.02em;
	margin-bottom: 8px;

	@media ${props => props.theme.breakpoints.md} {
		/* font-size: 24px; */
		line-height: 28px;
	}

	@media ${props => props.theme.breakpoints.sm} {
		/* font-size: 20px; */
		line-height: 28px;
		letter-spacing: 0.02em;
		margin-bottom: 4px;
	}
`;

const ListParagraph = styled.p`
	/* font-size: 18px; */
	line-height: 30px;
	font-size: clamp(1.4rem, 0.73rem + 1.34vw, 1.8rem);
	@media ${props => props.theme.breakpoints.md} {
		/* font-size: 16px; */
		line-height: 28px;
	}

	@media ${props => props.theme.breakpoints.sm} {
		/* font-size: 14px; */
		line-height: 22px;
		width: 90%;
	}
`;

const ListItem = styled.li`
	max-width: 320px;
	display: flex;
	flex-direction: column;

	@media ${props => props.theme.breakpoints.md} {
		max-width: 203px;
	}

	@media ${props => props.theme.breakpoints.sm} {
		margin-bottom: 14px;
		max-width: 320px;
		flex-direction: row;
		margin-left: 1.6rem;
	}
`;

const IconWrapper = styled.div`
	margin-bottom: 1em;
	animation: loader 4s infinite forwards;
	width: max-content;
	& svg {
		fill: ${props => props.theme.colors.primaryPink};
	}
	@keyframes loader {
		0% {
			transform: rotate(0deg);
		}

		25% {
			transform: rotate(360deg);
		}

		50% {
			transform: rotate(360deg);
		}

		75% {
			transform: rotate(-360deg);
		}

		100% {
			transform: rotate(-360deg);
		}
	}
`;

const Technologies = () => (
	<Section id='tech'>
		<SectionTitle main>Technologies</SectionTitle>
		<SectionText main>
			My aim is to specialise in frontend, namely React. However, I still have a
			basic knowledge of backend technologies, such as Node.js, Express.js and
			MongoDB.
		</SectionText>
		<List>
			<ListItem>
				<ListContainer>
					<IconWrapper>
						<DiReact size='6rem' />
					</IconWrapper>
					<ListTitle>Front-End</ListTitle>
					<ListParagraph>
						Experience with React.js, Next.js, JavaScript, Styled Components,
						SASS, CSS, HTML and Bootstrap
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<ListContainer>
					<IconWrapper>
						<DiFirebase size='6rem' />
					</IconWrapper>
					<ListTitle>Back-End</ListTitle>
					<ListParagraph>
						Experience with Node.js, Express.js, EJS, MongoDB and Mongoose
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
