import React from 'react'
import competitions from '../../components/competitions/competitions';
import navMenu from '../../components/navigation/navMenu';
import calendar from '../../components/calendar/calendar';
import feed from '../../components/newsFeed/feed';


import clubLogo from './project-card6.jpg'
import clubGallery from './clubGallery';
import clubTopInfo from './clubTopInfo';
import personPreview from '../../components/person/personPreview';
export default function club() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-xl-4 u-hidden-down@wide">
					<aside className="c-menu u-ml-medium">

						<div className="u-mb-medium">
							{navMenu()}
						</div>

						{competitions()}
					</aside>
				</div>

				<div className="col-md-7 col-xl-5">
					<main>

						<div className="u-mb-medium">
							{clubTopInfo()}
						</div>

						<div className="u-mb-medium">
							{clubGallery()}
						</div>

						<div className="u-mb-medium">
							{feed()}
						</div>

					</main>
				</div>

				<div className="col-md-5 col-xl-3 u-mb-medium u-hidden-down@tablet">
					<div className="u-mb-medium" style={{ height: '199px' }}>
						<img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={clubLogo} alt="User's profile cover" />
					</div>

					<div className="u-mb-medium">
						<div className="c-card u-p-medium">
							<h6>Участники</h6>
							<div className="row">
								{Array(6).fill().map((_, index) => <div className="col-4 u-mb-small" key={index}>
										{personPreview()}
									</div>)}
							</div>
						</div>
					</div>

					{calendar()}

				</div>
			</div>
		</div>
	)
}
