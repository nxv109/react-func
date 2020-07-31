import React from 'react';
import { Link } from 'react-router-dom';

import './SideBar.scss';
import Button from 'components/Button';

export default function SideBar() {
  return (
    <div className="sidebar">
      <Link to="/">Home</Link>
      <Link to="/">Products</Link>
      <Link to="/">Contact</Link>
      <span className="sidebar__register">
	      <Button link="/register" text="Register" size="sm" type="primary" />
      </span>
      <span className="sidebar__login">
	      <Button link="/login" text="Login" size="sm" type="link" />
      </span>
    </div>
  )
}