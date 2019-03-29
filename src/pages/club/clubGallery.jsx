import React from 'react'
import thumb from './browse1.jpg'

export default function clubGallery() {
	return (
		<div className="c-card u-p-medium u-text-small">
			<h6 className="u-text-bold">Фотоальбомы</h6>

			<div className="c-feed__gallery">

				{Array(4).fill().map((_, index) => <div key={index} className="c-feed__gallery-item">
					<img src={thumb} alt="thumb" style={{height: '100%', objectFit: 'cover'}} />
				</div>)}

			</div>
		</div>
	)
}
