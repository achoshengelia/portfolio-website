import styled from 'styled-components';

export const Section = styled.section`
	display: ${(props) => (props.grid ? 'grid' : 'flex')};
	flex-direction: ${(props) => (props.row ? 'row' : 'column')};
	padding: ${(props) => (props.nopadding ? '0' : '32px 48px 0')};
	margin: ${({ nomargin }) => (nomargin ? '0 auto' : '0 auto 15rem')};
	max-width: 1040px;
	box-sizing: content-box;
	position: relative;
	overflow: hidden;
	grid-template-columns: 1fr 1fr;
	min-height: ${(props) => (props.fullScreen ? '100vh' : '50vh')};
	@media ${(props) => props.theme.breakpoints.lg} {
		min-height: 75rem;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		padding: 24px 48px 0;
		flex-direction: column;
		min-height: 100vh;
		margin: ${({ nomargin }) => (nomargin ? '0 auto' : '0 auto 5rem')};
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		padding: ${(props) => (props.nopadding ? '0' : '16px 16px 0')};
		margin: ${({ nomargin }) => (nomargin ? '0 auto' : '0 auto 2rem')};
		min-height: 50vh;
		width: calc(100vw - 32px);
		flex-direction: column;
	}
`;

export const SectionTitle = styled.h2`
	font-weight: 800;
	font-size: ${(props) => (props.main ? '5.4rem' : '5rem')};
	width: max-content;
	max-width: 100%;
	margin-bottom: 16px;
	padding: ${(props) => (props.main ? '58px 0 16px' : '0')};
	animation: ${({ modal }) => (modal ? 'lightUp 0.5s ease-in forwards' : '')};
	opacity: ${({ modal }) => (modal ? '0' : '1')};
	@keyframes lightUp {
		100% {
			opacity: 1;
		}
	}
	@media ${(props) => props.theme.breakpoints.lg} {
		font-size: 4.4rem;
		margin-bottom: 1.5em;
		/* text-align: center; */
	}

	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 3.8rem;
		margin-bottom: 1.2rem;
		margin-top: 12rem;
		padding: ${(props) => (props.main ? '40px 0 12px' : '0')};
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 3rem;
		margin-bottom: 0.8rem;
		margin-top: 5rem;
		margin-left: 3rem;
		max-width: 100%;
	}
`;

export const SectionText = styled.p`
	max-width: 1000px;
	font-size: 2.7rem;
	line-height: 40px;
	font-weight: 300;
	padding-bottom: 3.6rem;
	animation: ${({ modal }) => (modal ? 'lightUp 0.5s ease-in forwards' : '')};
	opacity: ${({ modal }) => (modal ? '0' : '1')};
	@keyframes lightUp {
		100% {
			opacity: 1;
		}
	}

	@media ${(props) => props.theme.breakpoints.lg} {
		font-size: 2.4rem;
		/* margin-bottom: 1.5em; */
		/* text-align: center; */
		/* width: 600px; */
	}

	@media ${(props) => props.theme.breakpoints.md} {
		max-width: 670px;
		font-size: 20px;
		line-height: 3.2rem;
		padding-bottom: 24px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 16px;
		line-height: 2.4rem;
		margin: ${({ main }) => (main ? '0rem 3rem' : '0')};
		padding-bottom: 16px;
	}
`;

export const LinkContainer = styled.div`
	margin-left: ${({ large }) => (large ? '24px' : '16px')};
	transition: 0.3s ease;
	justify-content: center;
	border-radius: 50px;
	padding: 8px;

	&:hover {
		background-color: #212d45;
		transform: scale(1.2);
		cursor: pointer;
	}

	@media ${(props) => props.theme.breakpoints.md} {
		margin-left: ${({ large }) => (large ? '16px' : '8px')};
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		margin-left: ${({ large }) => (large ? '0' : '8px')};
	}
`;
