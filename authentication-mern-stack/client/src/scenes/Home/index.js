import React from 'react';
import Breadcrumb from 'components/Breadcrumb';

import RESTService from 'api/RESTService';
// import webStorage from 'helpers/webStorage';

export default function Home() {
	const handleClick = async () => {
		try {
			const response = await RESTService.get({ url: '/user/get-list' });
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<React.Fragment>
			<Breadcrumb />
			<h1>This is Home page</h1>
			<button onClick={handleClick}>Request</button>
		</React.Fragment>
	)
}
