import React from 'react';

import Button from 'components/Button';
import Breadcrumb from 'components/Breadcrumb';

import './Register.scss';

export default function Register() {
	const handleSubmit = e => {
		e.preventDefault();
		console.log('submited');
	};

	return (
		<div className="register">
			<Breadcrumb />
			<form>
				<div className="form-group">
					<label>Fullname</label>
					<input className="el-input" type="text" placeholder="Fullname" />
				</div>
				<div className="form-group">
					<label>Email</label>
					<input className="el-input" type="text" placeholder="Email" />
				</div>
				<div className="form-group">
					<label>Password</label>
					<input className="el-input" type="text" placeholder="Password" />
				</div>
				<div className="form-group">
					<label>Confirm password</label>
					<input className="el-input" type="text" placeholder="Confirm password" />
				</div>
				<Button onClick={handleSubmit} text="Register" size="md" type="primary" />
			</form>
		</div>
	)
}