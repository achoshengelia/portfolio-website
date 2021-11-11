import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import Timeline from '../components/TimeLine';
import Footer from '../components/Footer';
import styled from 'styled-components';
import React from 'react';

const Main = styled.main``;

const Home = () => {
	return (
		<React.Fragment>
			<Header />
			<Main>
				<Hero />
				<Technologies />
				<Projects />
				<Timeline />
			</Main>
			<Footer />
		</React.Fragment>
	);
};

export default Home;
