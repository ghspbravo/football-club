import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'

import bgImage from './bg.jpg'
import logo from '../../components/logo/logo';
import authLogin from './authLogin';
import authRegister from './authRegister';
import authForget from './authForget';

export default function auth() {
	return (
		<div className="m--skin- m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default">
			<div className="m-grid m-grid--hor m-grid--root m-page">
				<div className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-grid--tablet-and-mobile m-grid--hor-tablet-and-mobile m-login m-login--1 m-login--signin" id="m_login">
					<div className="m-grid__item m-grid__item--order-tablet-and-mobile-2 m-login__aside">
						<div className="m-stack m-stack--hor m-stack--desktop">
							<div className="m-stack__item m-stack__item--fluid">
								<div className="m-login__wrapper">
									<div className="m-login__logo" style={{maxWidth: '200px'}}>
										<Link to="/">
											{logo()}
										</Link>
									</div>
									<Switch>
										<Route path="/auth/register" component={authRegister} />
										<Route path="/auth/recover" component={authForget} />
										<Route component={authLogin} />
									</Switch>
								</div>
							</div>
						</div>
					</div>
					<div className="m-grid__item m-grid__item--fluid m-grid m-grid--center m-grid--hor m-grid__item--order-tablet-and-mobile-1	m-login__content" style={{ backgroundImage: `url(${bgImage})` }}>
						<div className="m-grid__item m-grid__item--middle">
							<h3 className="m-login__welcome">
								Join Our Community
						</h3>
							<p className="m-login__msg">
								Lorem ipsum dolor sit amet, coectetuer adipiscing
							<br />
								elit sed diam nonummy et nibh euismod
						</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
