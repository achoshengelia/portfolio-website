import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../styles/GlobalComponents/Button';
import EmailForm from './ContactModal';
import Portal from './Utilities/Portal';
import {
	FaInstagram,
	FaGithub,
	FaLinkedinIn,
	FaArrowUp,
	FaCopyright,
} from 'react-icons/fa';

const StyledFooter = styled.footer`
	min-height: 22rem;
	background-color: ${(props) => props.theme.colors.primary1};
	color: ${(props) => props.theme.colors.primaryPink};
	margin-top: 10rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2.6em;
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 3em 0;
		/* gap: 1em; */
	}
`;

const BtnContainer = styled.div``;

const SocialsRow = styled.div`
	width: 100%;
	padding: 0 5rem;
	display: flex;
	justify-content: space-between;
	@media ${(props) => props.theme.breakpoints.sm} {
		flex-direction: column;
		gap: 2em;
	}
`;
const Socials = styled.div`
	display: flex;
	gap: 1em;
	@media ${(props) => props.theme.breakpoints.sm} {
		align-self: center;
	}
`;
const SocialIcons = styled.a`
	transition: 0.3s ease;
	/* color: #f4a261; */
	border-radius: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	fill: #f9c9d7;
	/* opacity: 0.7;
	&:hover {
		opacity: 1;
		transform: scale(1.1);
		cursor: pointer;
	} */
	& svg {
		transition: 0.4s ease;
	}
	& svg:hover {
		fill: #f9c9d7;
	}
	@media ${(props) => props.theme.breakpoints.lg} {
		size: 1.9rem;
	}
`;
const LegalRow = styled.div`
	width: 100%;
	padding: 0 5rem;
	display: flex;
	justify-content: space-between;
	@media ${(props) => props.theme.breakpoints.sm} {
		flex-direction: column;
		gap: 2em;
		align-items: center;
	}
`;
const BackToTop = styled.a`
	display: flex;

	gap: 0.5em;
	&:hover span {
		transform: translateY(-15%);
	}
`;
const ArrowContainer = styled.span`
	/* display: inline-block; */
	transition: transform 0.2s ease;
	&:hover {
		transform: translateY(-15%);
	}
`;
const Copyright = styled.div`
	display: flex;
	gap: 0.6em;
	@media screen and (max-width: 375px) {
		gap: 0;
	}
`;

const Footer = () => {
	const [showModal, setShowModal] = useState(false);
	const showModalHandler = () => setShowModal((prevState) => !prevState);
	const closeModalHandler = (isClosed) => setShowModal(isClosed);

	return (
		<StyledFooter>
			<SocialsRow>
				{showModal && (
					<Portal selector="#contactmodal">
						<EmailForm closeModalHandler={closeModalHandler} />
					</Portal>
				)}
				<BtnContainer onClick={showModalHandler}>
					<Button alt pink>
						Contact Me
					</Button>
				</BtnContainer>

				<Socials>
					<SocialIcons
						href="https://www.linkedin.com/in/achidev/"
						target="_blank"
					>
						<FaLinkedinIn size="2rem" />
					</SocialIcons>
					<SocialIcons href="https://github.com/achoshengelia" target="_blank">
						<FaGithub size="2rem" />
					</SocialIcons>
					<SocialIcons
						href="https://www.instagram.com/cape_sundew/"
						target="_blank"
					>
						<FaInstagram size="2rem" />
					</SocialIcons>
				</Socials>
			</SocialsRow>
			<LegalRow>
				<BackToTop href="#">
					Back to top
					<ArrowContainer>
						<FaArrowUp />
					</ArrowContainer>
				</BackToTop>
				<Copyright>
					Achi Shengelia - All rights reserved
					<FaCopyright />
				</Copyright>
			</LegalRow>
		</StyledFooter>
	);
};

export default Footer;
