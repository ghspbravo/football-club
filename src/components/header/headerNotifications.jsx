import React from 'react'
import { Link } from "react-router-dom";

export default function headerNotifications() {
	return (
		<div className="c-dropdown dropdown">
			<Link className="c-notification dropdown-toggle" to="/" id="dropdownMenuAlerts" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				<span className="c-notification__icon">
					<i className="fa fa-bell-o"></i>
				</span>
				<span className="c-notification__number">3</span>
			</Link>

			<div className="c-dropdown__menu c-dropdown__menu--large dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuAlerts" x-placement="bottom-end"
				style={{ position: 'absolute', transform: 'translate3d(-280px, 30px, 0px)', top: '0px', left: '0px', willChange: 'transform' }}>
				<Link to="/" className="c-dropdown__item dropdown-item o-media">
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
				</Link>

				<Link to="/" className="c-dropdown__item dropdown-item o-media">
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
				</Link>
				<Link to="/" className="c-dropdown__item dropdown-item o-media">
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
				</Link>
			</div>
		</div>
	)
}
