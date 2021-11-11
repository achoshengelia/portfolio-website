import Link from 'next/link';
import React, { useState } from 'react';
import { FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Portal from './Utilities/Portal';
import styled from 'styled-components';

const Container = styled.nav`
	position: sticky;
	max-width: 1350px;
	width: 100%;
	margin: auto;
	margin-top: 0.4em;
	display: grid;
	/* grid-template-columns: repeat(5, 1fr); */
	grid-template-columns: 4fr 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr;
	grid-column-gap: 2rem;
	padding: 2.2rem 1.2rem 1.2rem 1.2rem;
	opacity: 0;
	/* animation: ${({ didMount }) =>
		!didMount ? 'fadeIn 2s 5s forwards;' : ''}; */
	animation: fadeIn 2s 5s forwards;
	@keyframes fadeIn {
		to {
			opacity: 1;
		}
	}
`;
const Div1 = styled.div`
	/* grid-area: 1 / 1 / 2 / 2; */
	display: flex;
	/* flex-direction: row; */
	align-content: center;
	/* gap: 3em; */
	& > * + * {
		margin-left: 3em;
	}
	@media screen and (max-width: 1290px) {
		width: max-content;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		display: none;
	}
`;
const Div2 = styled.div`
	grid-area: 1 / 2 / 2 / 4;
	display: flex;
	justify-content: space-evenly;
	@media ${(props) => props.theme.breakpoints.sm} {
		grid-area: 2 / 2 / 3 / 5;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		display: none;
	}
	@media ${(props) => props.theme.breakpoints.lg} {
		grid-area: 2 / 2 / 1/ 5;
	}
`;
const Div3 = styled.div`
	grid-area: 1 / 5 / 2 / 6;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	@media screen and (max-width: 1290px) {
		/* gap: 1.5em; */
		& > * + * {
			margin-left: 1.5em;
		}
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		align-items: center;
		grid-area: 1 / 4 / 2 / 6;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		display: none;
	}
`;
const MainSpan = styled.span`
	font-size: 2.2rem;
	/* color: #f4a261; */
	line-height: 3.2rem;
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 10rem;
	}
	@media ${(props) => props.theme.breakpoints.lg} {
		font-size: 2.3rem;
	}
`;
const NavLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2.2rem;
	line-height: 32px;
	/* color: rgba(255, 255, 255, 0.75); */
	/* color: #f4a261; */
	opacity: 0.7;

	transition: 0.4s ease;
	&:hover {
		/* color: #fff; */
		color: ${(props) => props.theme.colors.primaryPink};
		opacity: 1;
		cursor: pointer;
		transform: scale(1.1);
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.5rem;
	}
	@media ${(props) => props.theme.breakpoints.lg} {
		font-size: 1.9rem;
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
	opacity: 0.7;
	&:hover {
		/* background-color: #212d45; */
		opacity: 1;
		transform: scale(1.1);
		cursor: pointer;
	}
	& svg {
		transition: 0.4s ease;
	}
	& svg:hover {
		fill: ${(props) => props.theme.colors.primaryPink};
	}
	@media ${(props) => props.theme.breakpoints.lg} {
		size: 1.9rem;
	}
`;
const HamburgerWrapper = styled.div`
	display: none;
	@media ${(props) => props.theme.breakpoints.md} {
		position: fixed;
		top: 0;
		right: 0;
		height: 3rem;
		width: 3rem;
		margin: 1.5em 1.2em 0 0;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		opacity: 0.7;
		z-index: 20;
	}
`;
const HamburgerMenu = styled.div`
	height: 2px;
	background-color: ${(props) => props.theme.colors.primary1};
	width: 30px;
	border-radius: 10px;
	transition: all 0.2s ease-in;
	transform: ${(props) => (props.isOpen ? 'translateX(-35px)' : '')};
	visibility: ${(props) => (props.isOpen ? 'hidden' : 'visible')};
	&::before,
	&::after {
		content: '';
		position: absolute;
		background-color: ${(props) => (props.isOpen ? '#f9c9d7' : 'inherit')};
		height: 2px;
		width: 30px;
		border-radius: 10px;
		transition: all 0.2s ease-in;
	}
	&::before {
		transform: translateY(7px);
		visibility: visible;
		transform: ${(props) =>
			props.isOpen ? 'translate(35px) rotate(-45deg)' : ''};
	}
	&::after {
		transform: translateY(-7px);
		visibility: visible;
		transform: ${(props) =>
			props.isOpen ? 'translateX(35px) rotate(45deg)' : ''};
	}
`;
const SideBar = styled.nav`
	display: none;
	@media ${(props) => props.theme.breakpoints.md} {
		position: fixed;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/* gap: 2em; */
		& > * + * {
			margin-top: 2em;
		}
		top: 0;
		left: 0;
		background: #212529;
		color: ${(props) => props.theme.colors.primaryPink};
		height: 100vh;
		width: 100vw;
		z-index: 10;
		overflow: hidden;
	}
`;

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const isOpenHandler = () => {
		setIsOpen((prevState) => !prevState);
		const body = document.getElementById('body');
		body.style.overflow = !isOpen ? 'hidden' : '';
		body.style.height = '100vh';
	};

	return (
		<React.Fragment>
			{!isOpen && (
				<Container>
					<Div1>
						<Link href="/">
							<a>
								<MainSpan>Achi Shengelia</MainSpan>
							</a>
						</Link>
						<li>
							<Link href="#tech">
								<NavLink>Technologies</NavLink>
							</Link>
						</li>
						<li>
							<Link href="#projects">
								<NavLink>Projects</NavLink>
							</Link>
						</li>

						<li>
							<Link href="#about">
								<NavLink>About</NavLink>
							</Link>
						</li>
					</Div1>
					{/* <Div2></Div2> */}
					<Div3>
						<SocialIcons
							href="https://www.linkedin.com/in/achidev/"
							target="_blank"
						>
							<FaLinkedinIn size="2.5rem" />
						</SocialIcons>
						<SocialIcons
							href="https://github.com/achoshengelia"
							target="_blank"
						>
							<FaGithub size="2.5rem" />
						</SocialIcons>
						<SocialIcons
							href="https://www.instagram.com/cape_sundew/"
							target="_blank"
						>
							<FaInstagram size="2.5rem" />
						</SocialIcons>
					</Div3>
				</Container>
			)}
			{isOpen && (
				<Portal selector="#sidebar">
					<SideBar>
						<Link href="/">
							<a>
								<MainSpan onClick={isOpenHandler}>Achi Shengelia</MainSpan>
							</a>
						</Link>
						<ul>
							<li onClick={isOpenHandler}>
								<Link href="#tech">
									<NavLink>Technologies</NavLink>
								</Link>
							</li>
							<li onClick={isOpenHandler}>
								<Link href="#projects">
									<NavLink>Projects</NavLink>
								</Link>
							</li>

							<li onClick={isOpenHandler}>
								<Link href="#about">
									<NavLink>About</NavLink>
								</Link>
							</li>
						</ul>
						<SocialIcons
							href="https://www.linkedin.com/in/achidev/"
							target="_blank"
						>
							<FaLinkedinIn size="2rem" />
						</SocialIcons>
						<SocialIcons
							href="https://github.com/achoshengelia"
							target="_blank"
						>
							<FaGithub size="2rem" />
						</SocialIcons>
						<SocialIcons
							href="https://www.instagram.com/cape_sundew/"
							target="_blank"
						>
							<FaInstagram size="2rem" />
						</SocialIcons>
					</SideBar>
				</Portal>
			)}
			<HamburgerWrapper onClick={isOpenHandler}>
				<HamburgerMenu isOpen={isOpen} />
			</HamburgerWrapper>
		</React.Fragment>
	);
};

export default Header;
