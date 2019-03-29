import React from 'react'
import { Link } from "react-router-dom";

import headerSearch from './headerSearch'

import headerNotifications from './headerNotifications';
import headerProfile from './headerProfile';
import logo from '../logo/logo';

export default function header() {
	return (
		<header className="u-mb-medium" style={{ backgroundColor: 'white', borderBottom: '1px solid #e6eaee' }}>
			<div className="container">
				<div className="c-navbar" style={{ borderBottom: 'none' }}>

					<Link className="c-navbar__brand" to="/">
						{logo()}
					</Link>

					<div className="u-hidden-down@tablet u-mr-small">
						{headerSearch()}
					</div>

					<div className="u-ml-auto u-hidden-down@mobile u-mr-small">
						{headerNotifications()}
					</div>

					{headerProfile()}

				</div>
			</div>
		</header>
	)
}
