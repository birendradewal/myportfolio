import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import SEO from '../components/SEO';

const Home = () => {
	return (
		<>
			<SEO title={'Home'} desc={'Official Portfolio'} />
			<Header />
			<Footer />
		</>
	);
};

export default Home;
