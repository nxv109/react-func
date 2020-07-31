import React from 'react';
import { Link } from 'react-router-dom';

// import './Button.scss';

export default function Button({ link, text, size, type, onClick }) {
	if (link) {
		return (
			<Link className={`btn btn-size-${size} btn--${type}`} to={link}>{text}</Link>
		)
	}

	return (
		<button onClick={onClick} className={`btn btn-size-${size} btn--${type}`}>
			{text}	
		</button>
	)
}