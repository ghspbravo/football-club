import React from 'react'
import avatar from './avatar-72.jpg'

export default function personPreview() {
	return (
		<div className="o-media">
			<div className="c-avatar c-avatar--small justify-content-center">
				<img className="c-avatar__img" src={avatar} alt="Person's Face" />
			</div>
			<small className="u-block u-text-mute" style={{ textAlign: 'center' }}>Mark</small>
		</div>
	)
}
