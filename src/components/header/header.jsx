import React from 'react'
import { Link } from "react-router-dom";

import logo from './logo.png'
import avatar from './avatar.png'

export default function header() {
	return (
		<header className="u-mb-medium" style={{ backgroundColor: 'white', borderBottom: '1px solid #e6eaee' }}>
			<div className="container">
				<div className="c-navbar" style={{ borderBottom: 'none' }}>

					<Link className="c-navbar__brand" to="/">
						<img src={logo} alt="Logo" />
					</Link>

					<div className="c-field c-field--inline has-icon-right u-hidden-up@tablet">
						<span className="c-field__icon">
							<i className="fa fa-search"></i>
						</span>

						<label className="u-hidden-visually" for="navbar-search-small">Seach</label>
						<input className="c-input" id="navbar-search-small" type="text" placeholder="Search" />
					</div>


					<div className="c-field has-icon-right c-navbar__search u-hidden-down@tablet u-mr-small">
						<span className="c-field__icon">
							<i className="fa fa-search"></i>
						</span>

						<label className="u-hidden-visually" for="navbar-search">Seach</label>
						<input className="c-input" id="navbar-search" type="text" placeholder="Search" />
					</div>

					<div className="c-dropdown dropdown u-mr-small u-ml-auto u-hidden-down@mobile">
						<a className="c-notification dropdown-toggle" href="#" id="dropdownMenuAlerts" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<span className="c-notification__icon">
								<i className="fa fa-bell-o"></i>
							</span>
							<span className="c-notification__number">3</span>
						</a>

						<div className="c-dropdown__menu c-dropdown__menu--large dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuAlerts" x-placement="bottom-end" 
							style={{position: 'absolute', transform: 'translate3d(-280px, 30px, 0px)', top: '0px', left: '0px', willChange: 'transform'}}>
							<a href="#" className="c-dropdown__item dropdown-item o-media">
								<span className="o-media__img u-mr-xsmall">
									<span className="c-avatar c-avatar--xsmall">
										<span className="c-avatar__img u-bg-success u-flex u-justify-center u-align-items-center">
											<i className="fa fa-check u-text-large u-color-white"></i>
										</span>
									</span>

								</span>
								<div className="o-media__body">
									<h6 className="u-mb-zero">Completed a task</h6>
									<p className="u-text-mute">You have recieved a mention on twitter, check it out!</p>
								</div>
							</a>

							<a href="#" className="c-dropdown__item dropdown-item o-media">
								<span className="o-media__img u-mr-xsmall">
									<span className="c-avatar c-avatar--xsmall">
										<span className="c-avatar__img u-bg-fancy u-flex u-justify-center u-align-items-center">
											<i className="fa fa-calendar u-text-large u-color-white"></i>
										</span>
									</span>

								</span>
								<div className="o-media__body">
									<h6 className="u-mb-zero">Company meetup</h6>
									<p className="u-text-mute">You have recieved a mention on twitter, check it out!</p>
								</div>
							</a>
							<a href="#" className="c-dropdown__item dropdown-item o-media">
								<span className="o-media__img u-mr-xsmall">
									<span className="c-avatar c-avatar--xsmall">
										<span className="c-avatar__img u-bg-primary u-flex u-justify-center u-align-items-center">
											<i className="fa fa-info u-text-large u-color-white"></i>
										</span>
									</span>

								</span>
								<div className="o-media__body">
									<h6 className="u-mb-zero">Someone mentioned you</h6>
									<p className="u-text-mute">You have recieved a mention on twitter, check it out!</p>
								</div>
							</a>
						</div>
					</div>

					<div className="c-dropdown dropdown">
						<a className="c-avatar c-avatar--xsmall has-dropdown dropdown-toggle" href="#" id="dropdwonMenuAvatar" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<img className="c-avatar__img" src={avatar} alt="User's Profile Picture" />
							<p className="u-ml-small">Иван Иванов</p>
						</a>

						<div className="c-dropdown__menu dropdown-menu dropdown-menu-right" aria-labelledby="dropdwonMenuAvatar">
							<a className="c-dropdown__item dropdown-item" href="#">Настройки</a>
							<a className="c-dropdown__item dropdown-item" href="#">Помощь</a>
							<a className="c-dropdown__item dropdown-item" href="#">Выход</a>
						</div>
					</div>

				</div>
			</div>
		</header>
	)
}
