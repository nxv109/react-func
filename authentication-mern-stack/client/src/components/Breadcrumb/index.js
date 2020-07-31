import React from 'react';
import { Link } from 'react-router-dom';

import getUrlPath from 'helpers/getUrlPath';
import { BREADCRUMB } from 'constants/index';
import './Breadcrumb.scss'

export default function Breadcrumb(location) {
  const pathname = getUrlPath(window.location).pathname;
  const routes = BREADCRUMB[pathname];

  return (
    <div className="breadcrumb grid grid--align-center">
			{routes.map((route, i) => (
				<React.Fragment key={i}>
					<span className="breadcrumb__route">
						{
							route.link ?
						 	(<Link to={route.link}>{route.name}</Link>) :
						 	route.name
						}
					</span>
					<span className={i + 1  === routes.length ? 'd-none' : ''}>&nbsp;/&nbsp;</span>
				</React.Fragment>
			))}
		</div>
  )
}