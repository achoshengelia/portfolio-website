import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	line-height: 2.3rem;
	box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.2);
	padding: 1.5em;
	background: ${(props) => props.theme.colors.primaryPink};
	cursor: pointer;
	width: 16rem;
	&:nth-child(odd),
	&:nth-child(even) {
		justify-self: center;
		&::after {
			content: '';
			background-color: ${(props) => props.theme.colors.primaryPink};
			transform: rotate(45deg);
			position: absolute;
			top: calc(50% - 0.75rem);
			width: 1.5rem;
			height: 1.5rem;
		}
	}
	&:nth-child(odd) {
		transform: translateX(-50%);
		margin-right: 10em;
		text-align: right;
		align-items: flex-end;
		&::after {
			right: -0.75rem;
		}
		& span {
			right: -5.6em;
		}
		& div {
			align-self: flex-end;
		}
	}
	&:nth-child(even) {
		transform: translateX(50%);
		margin-left: 10em;
		text-align: left;
		align-items: flex-start;
		&::after {
			left: -0.75rem;
		}
		& span {
			left: -5.6em;
		}
		& div:last-child {
			flex-direction: row-reverse;
			align-self: flex-start;
			& span {
				margin-right: 0.5rem;
			}
		}
	}

	&:hover {
		box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.4);
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		line-height: 1.8rem;
		min-width: 14rem;
		height: max-content;
		&:nth-child(odd),
		&:nth-child(even) {
			transform: none;
			margin: 0;
			max-width: max-content;
			text-align: left;
			&::after {
				content: none;
			}
			& div {
				align-self: flex-start;
			}
			& div:last-child {
				flex-direction: row;
			}
		}
	}
`;

const Minimised = styled.div`
	display: flex;
	flex-direction: column;
	@media ${(props) => props.theme.breakpoints.sm} {
		max-height: 13rem;
		width: 20rem;
	}
`;
const Title = styled.span`
	font-size: 2.2rem;
	font-weight: 500;
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 1.8rem;
	}
`;
const Date = styled.time`
	margin-top: 0.5em;

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 1.5rem;
	}
`;

const Location = styled.div`
	margin-top: 0.3em;
	display: flex;
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 1.5rem;
	}
	/* flex-direction: row-reverse; */
`;
const LocationTitle = styled.span`
	margin-right: 0.5rem;
`;
const LocationIcon = styled.span`
	display: inline-block;
	transform: translateY(7%);
`;
const Circle = styled.span`
	box-sizing: border-box;
	background-color: #e9ecef;
	border: 3px solid ${(props) => props.theme.colors.primaryPink};
	border-radius: 50%;
	position: absolute;
	top: calc(50% - 1rem);
	width: 2rem;
	height: 2rem;
	z-index: 100000;
	@media ${(props) => props.theme.breakpoints.sm} {
		display: none;
	}
`;
const Description = styled.p`
	max-width: 250px;
	margin-top: 2em;
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 1.5rem;
	}
`;

const LinkContainer = styled.div`
	margin-top: 1em;
	/* border: 2px solid white; */
	&:hover {
		color: #e9ecef;
	}
`;

const TimeLineItem = ({ data }) => {
	const [showText, setShowText] = useState(false);
	const showTextHandler = () => setShowText((prevState) => !prevState);

	const stopPropagation = (e) => e.stopPropagation();

	return (
		<Container onClick={showTextHandler}>
			<Minimised>
				<Title>{data.title}</Title>
				<Date>{data.date}</Date>
				<Location>
					<LocationTitle>{data.location}</LocationTitle>
					<LocationIcon>
						<HiOutlineLocationMarker fill="#e9ecef" />
					</LocationIcon>
				</Location>
			</Minimised>
			{showText && (
				<React.Fragment>
					<Description>{data.description}</Description>

					{data.link && (
						<LinkContainer onClick={stopPropagation}>
							<Link href={data.link.url}>
								<a target="_blank">{data.link.text}</a>
							</Link>
						</LinkContainer>
					)}
				</React.Fragment>
			)}
			<Circle />
		</Container>
	);
};

export default TimeLineItem;
