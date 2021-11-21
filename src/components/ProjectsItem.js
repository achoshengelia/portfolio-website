import React, { useState } from 'react';
import styled from 'styled-components';

const Hr = styled.hr`
	width: 50px;
	height: 3px;
	margin: 20px auto;
	border: 0;
	background: ${(props) => props.theme.colors.primaryPink};
`;
const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	overflow: hidden;
`;
const BlogCard = styled.div`
	border-radius: 10px;
	box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.2);
	text-align: center;
	width: 100%;
	min-height: 360px;
	/* max-height: ${({ expand }) => (expand ? '75rem' : '35rem')};
	transition: 1s; */
	cursor: pointer;
	&:hover {
		transform: scale(1.005);
		box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.4);
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 80%;
		/* justify-self: start; */
		margin-right: 3rem;
	}
	@media screen and (max-width: 375px) {
		min-height: 260px;
		width: 70%;
		margin-left: 2.5rem;
	}
	@media screen and (max-width: 320px) {
		width: 60%;
		margin-left: 2.5rem;
	}
`;
const TitleContent = styled.div`
	/* color: #212529; */
	/* display: flex;
	justify-content: center;
	align-items: center; */
	margin-top: 1em;
	text-align: center;
	z-index: 20;
	width: 100%;
`;
const HeaderThree = styled.h3`
	font-weight: 500;
	letter-spacing: 2px;
	padding: 0.5rem 0;
	/* font-size: ${(props) => (props.title ? '3rem' : '2rem')}; */
	font-size: 3rem;
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 2.5rem;
	}
	@media screen and (max-width: 320px) {
		font-size: 2rem;
	}
`;
const CardInfo = styled.p`
	padding: 0 2.3em;
	line-height: 24px;
	text-align: left;
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 3rem;
	}
`;
const UtilityList = styled.ul`
	list-style-type: none;
	padding: 0;
	display: flex;
	justify-content: space-evenly;
	margin: 2.5rem 0;
`;
const ExternalLinks = styled.a`
	font-size: 1.6rem;
	padding: 0.7rem 2rem;
	border: 2px solid ${(props) => props.theme.colors.primaryPink};
	transition: 0.3s;
	position: relative;
	&::after {
		content: '';
		position: absolute;
		background: ${(props) => props.theme.colors.primaryPink};
		width: 0%;
		height: 100%;
		bottom: 0;
		left: -3px;
		transition: all 0.23s ease-in-out;
	}
	&:hover {
		&::after {
			width: 4%;
			left: calc(100% - 3px);
		}
	}
`;
const TagList = styled.ul`
	display: flex;
	justify-content: space-around;
	padding: 2rem;
`;
const Tag = styled.li`
	/* color: #f9c9d7; */
	font-size: 1.5rem;
`;
const Stack = styled.h4`
	margin-top: 1.5em;
	margin-bottom: 0.7em;
	font-weight: 500;
`;

const ProjectsItem = ({ data }) => {
	const [expand, setExpand] = useState(false);
	const expandHandler = () => setExpand((prevState) => !prevState);

	return (
		<BlogCard onClick={expandHandler} expand={expand}>
			<Img src={data.image} />
			<TitleContent>
				<HeaderThree>{data.title}</HeaderThree>
			</TitleContent>
			<Hr />
			{expand && (
				<React.Fragment>
					<CardInfo>{data.description}</CardInfo>
					<Stack>Stack</Stack>
					<TagList>
						{data.tags.map((tag, i) => (
							<Tag key={i}>{tag}</Tag>
						))}
					</TagList>
					<UtilityList>
						<ExternalLinks href={data.source} target="_blank">
							Live
						</ExternalLinks>
						<ExternalLinks href={data.visit} target="_blank">
							Code
						</ExternalLinks>
					</UtilityList>
				</React.Fragment>
			)}
		</BlogCard>
	);
};

export default ProjectsItem;
