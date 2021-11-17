import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { RiCloseFill } from 'react-icons/ri';
import { RiMailSendLine, RiErrorWarningLine } from 'react-icons/ri';
import { SectionTitle, SectionText } from '../styles/GlobalComponents/index';
import useForm from './Utilities/useForm';
import validateInfo from './Utilities/validateInfo';

const Overlay = styled.div`
	z-index: 99;
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: black;
	opacity: 0.75;
`;

const Container = styled.div`
	position: absolute;
	min-width: 100vw;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Form = styled.form`
	position: fixed;
	z-index: 100;
	display: flex;
	color: #212529;
	font-weight: 100;
	flex-direction: column;
	justify-content: center;
	max-width: 70rem;
	box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.2);
	border-radius: 1em;
	background-color: #e9ecef;
	padding: 2em;
	/* gap: 2em; */
	& > * + *:not(:last-child) {
		margin-bottom: 2em;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 93%;
	}
`;

const InpContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 20%;
	/* gap: 1.3em; */
	& > * + * {
		margin-top: 1.3em;
	}
`;

const NameEmail = styled.div`
	display: flex;
	/* gap: 1.4em; */
	& > * + * {
		margin-left: 1.4em;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		flex-direction: column;
		& > * + * {
			margin-left: 0;
			margin-top: 1.4em;
		}
	}
`;

const Input = styled.input`
	padding: 0.8em;
	/* width: 100%; */
	flex: 1;
	height: 5rem;
	outline: none;
	border: 2px solid ${(props) => props.theme.colors.primaryPink};
	background-color: #e9ecef;
	transition: transform 0.1s;
	&:focus {
		transform: scale(1.01);
	}
	&::placeholder {
		font-style: italic;
	}
`;

const Textarea = styled.textarea`
	resize: none;
	padding: 0.8em;
	border: 2px solid ${(props) => props.theme.colors.primaryPink};
	width: 100%;
	height: 20rem;
	background-color: #e9ecef;
	outline: none;
	transition: transform 0.1s;
	&:focus {
		transform: scale(1.01);
	}
	&::placeholder {
		/* color: red; */
		font-style: italic;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		height: 10rem;
	}
`;
const Label = styled.label``;

const Button = styled.button`
	width: 12em;
	align-self: ${({ onRight }) => (onRight ? 'flex-end' : 'center')};
	height: 3em;
	/* margin-top: 1.2em; */
	background-color: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 2px solid ${(props) => props.theme.colors.primaryPink};
	cursor: pointer;
	transition: 0.5s ease;
	position: relative;
	pointer-events: ${({ isEnabled }) => (isEnabled ? 'on' : 'none')};
	color: ${({ isEnabled }) => (isEnabled ? '#212529' : '#ADB5BD')};
	&::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 0;
		background: ${(props) => props.theme.colors.primaryPink};
		transition: all 0.23s ease-in-out;
		top: -3px;
		left: 0;
		bottom: auto;
	}
	&:hover {
		&::after {
			height: 8%;
			top: calc(100% - 3px);
		}
	}
	animation: ${({ onRight }) =>
		onRight ? '' : 'lightUp 0.5s ease-in forwards'};
	opacity: ${({ onRight }) => (onRight ? '1' : '0')};
	@keyframes lightUp {
		100% {
			opacity: 1;
		}
	}

	@media ${(props) => props.theme.breakpoints.md} {
		width: 12em;
		/* margin-top: -1.5rem; */
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
		&:hover {
			&::after {
				top: calc(100% - 2px);
			}
		}
	}
`;

const CloseIcon = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	margin: 0.5em;
	cursor: pointer;
`;

const ResponseIcon = styled.div`
	animation: slideRight 0.5s ease-in forwards;
	opacity: 0;
	transform: translateX(-10rem);
	@keyframes slideRight {
		80% {
			opacity: 1;
			transform: translateX(5rem);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}
`;

const Response = styled.div`
	position: fixed;
	z-index: 100;
	display: flex;
	color: #212529;
	font-weight: 100;
	flex-direction: column;
	/* justify-content: center; */
	align-items: center;
	max-width: 100%;
	max-height: 100%;
	box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.2);
	border-radius: 1em;
	background-color: #e9ecef;
	padding: 2em;
	/* gap: 2em; */
	& > * + * {
		margin-top: 2em;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 93%;
	}
`;

const ErrorMessage = styled.p`
	color: #eb4f7d;
	display: flex;
	gap: 0.5rem;
	opacity: 0;
	animation: lightUp 0.2s ease-in forwards;
	opacity: 0;
	@keyframes lightUp {
		80% {
			opacity: 1;
		}
		100% {
			opacity: 1;
		}
	}
`;
const ErrorIcon = styled.div`
	transform: translateY(6%);
`;

const EmailForm = ({ closeModalHandler }) => {
	const { handleChange, values, errors, setErrors } = useForm(
		Form,
		validateInfo
	);
	const [showForm, setShowForm] = useState(true);
	const [success, setSuccess] = useState(true);
	const [isEnabled, setIsEnabled] = useState(true);
	const form = useRef();
	const sendEmail = (e) => {
		if (values.name === '' || values.email === '' || values.message === '') {
			e.preventDefault();
			setErrors(validateInfo(values));
		} else if (Object.keys(errors).length === 0) {
			e.preventDefault();
			setIsEnabled(false);
			emailjs
				.sendForm(
					'service_ocmdipb',
					'template_68z4s9g',
					form.current,
					'user_gyFx0vdAAgOJ0hrz4Lmw6'
				)
				.then(
					(result) => {
						setShowForm(false);
						setSuccess(true);
						setIsEnabled(true);
						console.log(result.text);
					},
					(error) => {
						setShowForm(false);
						setSuccess(false);
						console.log(error.text);
					}
				);
			e.target.reset();
		} else {
			e.preventDefault();
			setErrors(validateInfo(values));
		}
	};
	const closeModal = () => closeModalHandler(false);
	return (
		<React.Fragment>
			<Container>
				<Overlay onClick={closeModal}></Overlay>
				{showForm && (
					<Form ref={form} onSubmit={sendEmail} noValidate>
						<CloseIcon onClick={closeModal}>
							<RiCloseFill size="2rem" />
						</CloseIcon>
						<NameEmail>
							<InpContainer>
								<Label HTMLfor="name">Name</Label>
								<Input
									type="text"
									name="name"
									id="name"
									value={values.name}
									onChange={handleChange}

									// placeholder={errors.name}
								/>
								{errors.name && (
									<ErrorMessage>
										<ErrorIcon>
											<RiErrorWarningLine />
										</ErrorIcon>
										{errors.name}
									</ErrorMessage>
								)}
							</InpContainer>
							<InpContainer>
								<Label HTMLfor="email">Email</Label>
								<Input
									type="email"
									name="email"
									id="email"
									value={values.email}
									onChange={handleChange}
								/>
								{errors.email && (
									<ErrorMessage>
										<RiErrorWarningLine />
										{errors.email}
									</ErrorMessage>
								)}
							</InpContainer>
						</NameEmail>
						<InpContainer>
							<Label HTMLfor="message">Message</Label>
							<Textarea
								name="message"
								id="message"
								value={values.message}
								onChange={handleChange}
							/>
							{errors.message && (
								<ErrorMessage>
									<RiErrorWarningLine />
									{errors.message}
								</ErrorMessage>
							)}
						</InpContainer>
						<Button type="submit" onRight isEnabled={isEnabled}>
							{isEnabled && 'Send'}
							{!isEnabled && 'Sent!'}
						</Button>
					</Form>
				)}
				{!showForm && (
					<Response>
						<SectionTitle modal>
							{success && 'Thanks for reaching out!'}
							{!success && 'Something went wrong :('}
						</SectionTitle>
						<SectionText modal>
							{success && "I'll get back to you as soon as possible."}
							{!success && 'Please try again later.'}
						</SectionText>
						<ResponseIcon>
							{success && <RiMailSendLine size="6rem" fill="#f9c9d7" />}
							{!success && <RiErrorWarningLine size="8rem" fill="#f9c9d7" />}
						</ResponseIcon>
						<Button onClick={closeModal} isEnabled={isEnabled}>
							Back to Home
						</Button>
					</Response>
				)}
			</Container>
		</React.Fragment>
	);
};

export default EmailForm;
