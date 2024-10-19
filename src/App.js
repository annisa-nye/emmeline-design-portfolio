import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx'; // Updated to .jsx
import Gallery from './components/Gallery.jsx'; // Updated to .jsx
import About from './components/About.jsx'; // Updated to .jsx
import Contact from './components/Contact.jsx'; // Updated to .jsx

const App = () => {
	return (
		<Router>
			<div>
				{/* Header will be visible on all pages */}
				<Header />

				{/* Define routes for different pages */}
				<Routes>
					{/* Work page (Home) */}
					<Route path='/' element={<Gallery />} />

					{/* About page */}
					<Route path='/about' element={<About />} />

					{/* Contact page */}
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
