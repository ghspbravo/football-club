import React from 'react'
import { Link } from "react-router-dom";

import headerSearch from './headerSearch'

import logo from './logo.png'

import headerNotifications from './headerNotifications';
import headerProfile from './headerProfile';

export default function header() {
	return (
		<header className="u-mb-medium" style={{ backgroundColor: 'white', borderBottom: '1px solid #e6eaee' }}>
			<div className="container">
				<div className="c-navbar" style={{ borderBottom: 'none' }}>

					<Link className="c-navbar__brand" to="/">
						<img src={logo} alt="Logo" />
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
