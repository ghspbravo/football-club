import React from 'react'
import { Link } from 'react-router-dom'

import competitionThumb from './feed6.jpg'

export default function competitions() {
	return (
		<div className="c-messages" style={{ backgroundColor: 'white', height: 'auto' }}>
			<div className="u-mb-medium u-ml-medium u-mt-medium">
				<h3>Соревнования</h3>
			</div>
			{Array(10).fill().map((_, index) => <Link key={index} className="c-message" to="/competitions/1">
				<div className="o-media">
					<div className="o-media__img u-mr-small">
						<div className="c-avatar c-avatar--small">
							<img className="c-avatar__img" src={competitionThumb} alt="competition thumb" />
						</div>
					</div>
					<div className="o-media__body">
						<h4 className="c-message__title">Кубок ЖБИ
						<span className="c-message__title-meta">Минифутбол</span></h4>
					</div>
				</div>
			</Link>
			)}

		</div>
	)
}
