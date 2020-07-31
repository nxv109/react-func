import React, { useState } from 'react';

import RESTService from 'api/RESTService';
import webStorage from 'helpers/webStorage';
import { APP_KEYS } from 'constants/index';

import Button from 'components/Button';
import Breadcrumb from 'components/Breadcrumb';

import './Login.scss';

export default function Login() {
	const [formData, setFormData] = useState({});

	const handleChange = e => {
		const target = e.target;
		const { name, value } = target;

		setFormData({ ...formData, [name]: value });
	}

	const handleSubmit = async e => {
		e.preventDefault();
		console.log('submited', formData);

		try {
			const response = await RESTService.post({ url: '/user/login', data: formData });
			console.log(response);
			const { refreshToken, token } = response;

			webStorage.set(APP_KEYS.ACCESS_TOKEN, token);
			webStorage.set(APP_KEYS.REFRESH_TOKEN, refreshToken);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="login">
		<Breadcrumb />
			<form>
				<div className="form-group">
					<label>Email</label>
					<input className="el-input" type="text" onChange={handleChange} name="email" value={formData.email || ''} placeholder="Email" />
				</div>
				<div className="form-group">
					<label>Password</label>
					<input className="el-input" type="text" onChange={handleChange} name="password" value={formData.password || ''} placeholder="Password" />
				</div>
				<Button onClick={handleSubmit} text="Login" size="md" type="primary" />
			</form>
		</div>
	)
}