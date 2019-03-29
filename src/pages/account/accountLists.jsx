import React from 'react'
import {Link} from 'react-router-dom'

import thumb from './feed7.jpg'
export default function accountLists(title) {
	return (
		<div className="c-card u-p-medium u-text-small">
			<h6 className="u-text-bold">{title}</h6>

			<div className="row no-gutters">
				{Array(6).fill().map((_, index) => <Link to="/club/1" key={index} className="o-media">
					<div className="o-media__img u-mr-xsmall">
						<div className="c-avatar c-avatar--small">
							<img className="c-avatar__img" src={thumb} alt="Thumb" />
						</div>
					</div>
				</Link>)}
			</div>

		</div>
	)
}
