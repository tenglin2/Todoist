import React from 'react';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';

export const App = function() {
	return (
		<div className="App">
			<h2>CSJAFD</h2>
			<Header />
			<Content />
		</div>
	);
};
