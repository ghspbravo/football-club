import React from 'react'
import {Link} from 'react-router-dom'
import personPreview from '../person/personPreview';

export default function participants() {
	return (
		<div className="c-card u-pv-medium u-ph-small">
			<h6>Участники</h6>
			<div className="row">
				{Array(6).fill().map((_, index) => <Link to='/user/1' className="col-4 u-mb-small" key={index}>
					{personPreview()}
				</Link>)}
			</div>
		</div>
	)
}
