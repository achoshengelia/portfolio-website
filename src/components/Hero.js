import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Section } from '../styles/GlobalComponents';
import Button from '../styles/GlobalComponents/Button';
import EmailForm from './ContactModal';
import Portal from './Utilities/Portal';
import useWindowDimensions from './Utilities/useWindow';

const TypeWriter = styled.h1`
	position: relative;
	font-weight: 800;
	font-size: 5.4rem;
	margin-top: 20rem;
	max-width: 100%;
	@keyframes typewriter {
		to {
			left: 100%;
		}
	}

	@keyframes blink {
		to {
			background: transparent;
		}
	}
	@media screen and (min-width: 935px) {
		&::before,
		&::after {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
		}
		&::before {
			background: ${(props) => props.theme.colors.background1};
			animation: typewriter 3s 1s steps(39) forwards;
		}
		&::after {
			background-color: ${(props) => props.theme.colors.primaryPink};
			animation: typewriter 3s 1s steps(39) forwards,
				blink 0.7s steps(39) infinite;
			width: 0.1em;
		}
	}

	@media ${(props) => props.theme.breakpoints.lg} {
		font-size: 4.4rem;
		margin-bottom: 1.5em;
	}

	@media ${(props) => props.theme.breakpoints.md} {
		margin-bottom: 1.2rem;
		margin-top: 18rem;
		padding: ${(props) => (props.main ? '40px 0 12px' : '0')};
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 4rem;
		margin-bottom: 0.8rem;
		margin-top: 8rem;
		margin-left: 3rem;
		width: 80%;
	}
`;

const SectionText = styled.p`
	max-width: 1000px;
	font-size: 2.7rem;
	line-height: 40px;
	font-weight: 300;
	margin: 0.5rem 0rem 5rem;
	@media screen and (min-width: 935px) {
		opacity: 0;
		transform: translateY(3rem);
		animation: fadeInUp 2s 5s forwards;
		@keyframes fadeInUp {
			to {
				opacity: 1;
				transform: translateY(0);
			}
		}
	}

	@media ${(props) => props.theme.breakpoints.lg} {
		font-size: 2.4rem;
		transform: translateY(-40%);
	}

	@media ${(props) => props.theme.breakpoints.md} {
		max-width: 670px;
		font-size: 20px;
		line-height: 3.2rem;
		padding-bottom: 24px;
		transform: translateY(20%);
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 2.2rem;
		line-height: 2.4rem;
		margin: 2rem 3rem;
		padding-bottom: 16px;
	}
`;

const BtnContainer = styled.div`
	@media ${(props) => props.theme.breakpoints.lg} {
		transform: translateY(-40%);
	}
	@media ${(props) => props.theme.breakpoints.md} {
		transform: translateY(10%);
		font-size: 10rem;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		margin-top: 5rem;
		margin-right: 10rem;
		margin-left: 3rem;
	}
`;

const Hero = (props) => {
	const [showModal, setShowModal] = useState(false);
	const showModalHandler = () => {
		setShowModal((prevState) => !prevState);
		const body = document.getElementById('body');
		body.style.minHeight = '100vh';
		body.style.overflow = 'hidden';
	};
	const closeModalHandler = (isClosed) => {
		setShowModal(isClosed);
		const body = document.getElementById('body');
		body.style.height = 'auto';
		body.style.overflow = '';
	};
	const { width } = useWindowDimensions();
	useEffect(() => {
		if (width > 935) {
			const body = document.getElementById('body');
			body.style.height = ' 100vh';
			body.style.overflow = 'hidden';
			setTimeout(() => {
				body.style.height = 'auto';
				body.style.overflow = '';
			}, 5800);
		}
	}, []);

	return (
		<Section fullScreen nomargin>
			{showModal && (
				<Portal selector="#contactmodal">
					<EmailForm closeModalHandler={closeModalHandler} />
				</Portal>
			)}
			<TypeWriter>Hello, welcome to my portfolio website!</TypeWriter>
			<SectionText>
				My name is Achi, I am a web developer currently based in Georgia,
				Tbilisi. I love building user-friendly and clean websites.
			</SectionText>
			<BtnContainer onClick={showModalHandler}>
				<Button fadeInRight>Contact Me</Button>
			</BtnContainer>
		</Section>
	);
};

export default Hero;
