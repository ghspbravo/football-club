import React from 'react'
import navMenu from '../../components/navigation/navMenu';
import calendar from '../../components/calendar/calendar';


import clubLogo from './project-card6.jpg'
import pageGallery from '../../components/pageGallery/pageGallery';
import pageTopInfo from '../../components/pageTopInfo/pageTopInfo';
import competitionGames from './competitionGames';
import participants from '../../components/participants/participants';
import competitionsToday from './competitionsToday';
export default function competition(router) {
	return (
		<div className="container">
			<div className="row">
				<div className="col-xl-3 u-hidden-down@wide">
					<aside className="c-menu u-ml-medium">

						<div className="u-mb-medium">
							{navMenu()}
						</div>

						<div className="u-mb-medium">
							{participants()}
						</div>

						{Array(4).fill().map((_, index) => <div key={index} className="c-card u-mb-small u-p-small">
							<div className="row align-items-center no-gutters">
								<div className="col">
									<h6 className="u-text-bold">1 тур</h6>
								</div>

								<div className="u-text-mute" style={{
									marginLeft: 'auto'
								}}>
									21:2
								</div>
							</div>
						</div>)}

					</aside>
				</div>

				<div className="col-md-7 col-xl-6">
					<main>
						<div className="u-mb-small">
							<button className="no-style link" onClick={router.history.goBack}><i className="fa fa-angle-double-left"></i> Назад</button>
						</div>

						<div className="u-mb-medium">
							{pageTopInfo()}
						</div>

						<div className="u-mb-medium">
							{pageGallery()}
						</div>

						<div className="u-mb-medium">
							{competitionGames()}
						</div>

					</main>
				</div>

				<div className="col-md-5 col-xl-3 u-mb-medium u-hidden-down@tablet">
					<div className="u-mb-medium">
						<img style={{ width: '100%', height: '200px', objectFit: 'cover' }} src={clubLogo} alt="User's profile cover" />
						<button className="u-width-100 c-btn c-btn--info">Подписаться на уведомления</button>
						<button className="u-mt-small u-width-100 c-btn c-btn--info">Подать заявку на участие</button>
					</div>

					{calendar()}

					<div className="u-mt-medium">
						{competitionsToday()}
					</div>

				</div>
			</div>
		</div>
	)
}
