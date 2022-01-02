import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	width: 12em;
	height: ${({ alt }) => (alt ? '52px' : '6.4rem')};
	font-size: ${({ alt }) => (alt ? '20px' : '2.4rem')};
	font-weight: 600;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 4px solid ${props => props.theme.colors.primaryPink};
	cursor: pointer;
	transition: 0.5s ease;
	position: relative;
	opacity: ${({ disabled }) => (disabled ? '.5' : '1')};
	background-color: transparent;
	color: ${({ pink }) => (pink ? '#f9c9d7' : '#212529')};
	&::after {
		content: '';
		visibility: ${({ alt }) => (alt ? 'hidden' : 'visible')};
		position: absolute;
		width: 100%;
		height: 0;
		background: ${props => props.theme.colors.primaryPink};
		transition: all 0.23s ease-in-out;
		top: -0.3rem;
		left: 0;
		bottom: auto;
	}
	&:hover {
		&::after {
			height: 8%;
			top: calc(100% - 4px);
		}
	}

	@media screen and (min-width: 810px) {
		margin-left: ${props => (props.fadeInRight ? '-4rem' : '0')};
		opacity: ${props => (props.fadeInRight ? '0' : '1')};
		transform: ${props => (props.fadeInRight ? 'translateX(-5rem)' : '')};
		animation: ${props => (props.fadeInRight ? `fadeInRight` : '')} 2s 5s
			forwards;
		@keyframes fadeInRight {
			to {
				opacity: 1;
				transform: translateX(4rem);
			}
		}
	}

	@media ${props => props.theme.breakpoints.md} {
		height: ${({ alt }) => (alt ? '52px' : '4.8rem')};
		font-size: 1.9rem;
		margin-bottom: ${({ alt }) => (alt ? '0' : '6.4rem')};
		/* margin-top: -1.5rem; */
	}

	@media ${props => props.theme.breakpoints.sm} {
		width: ${({ alt }) => (alt ? '100%' : '')};
		font-size: 2rem;
		/* width: 12em;
		height: 32px; */
		&:hover {
			&::after {
				top: calc(100% - 2px);
			}
		}
	}
`;

const Button = props => (
	<StyledButton
		alt={props.alt}
		form={props.form}
		disabled={props.disabled}
		fadeInRight={props.fadeInRight}
		pink={props.pink}>
		{props.children}
	</StyledButton>
);

export default Button;
