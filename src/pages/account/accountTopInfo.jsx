import React from 'react'

import avatar from './avatar.jpg'

export default function accountTopInfo() {
	return (
		<div className="c-card u-p-medium u-text-small">

			<div className="row no-gutters">
				<div className="o-media u-mr-small">
					<div class="c-avatar c-avatar--xlarge">
						<img class="c-avatar__img" src={avatar} alt="avatar" />
					</div>
				</div>

				<div className="o-media__content">
					<h3>Иван Иванов</h3>
					<ul className="c-profile-card__meta" style={{padding: 0}}>
						<li className="c-profile-card__meta-item">
							<i className="fa fa-map-marker"></i>Екатеринбург, Россия
						</li>

						<li className="c-profile-card__meta-item">
							<i className="fa fa-bullhorn"></i>30 лет
							</li>

						<li className="c-profile-card__meta-item">
							<i className="fa fa-inbox"></i>90 кг / 180 см
						</li>
					</ul>
				</div>
			</div>

		</div>
	)
}
