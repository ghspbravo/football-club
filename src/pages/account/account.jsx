import React from 'react'
import navMenu from '../../components/navigation/navMenu';
import accountContacts from './accountContacts';
import accountFeed from './accountFeed';

import avatar from './avatar.jpg'
import accountTables from './accountTables';
import accountTopInfo from './accountTopInfo';
import accountLists from './accountLists';
import competitions from '../../components/competitions/competitions';
import calendar from '../../components/calendar/calendar';

export default function account() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-xl-3 u-hidden-down@wide">
					<aside className="c-menu u-ml-medium">

						<div className="u-mb-medium">
							{navMenu()}
						</div>

						{competitions()}

					</aside>
				</div>

				<div className="col-md-7 col-xl-6">
					<main>

						<div className="u-mb-medium">
							{accountTopInfo()}
						</div>

						<div className="u-mb-medium">
							{accountContacts()}
						</div>

						<div className="u-mb-medium">
							{accountLists('Спортивная карьера')}
						</div>

						<div className="u-mb-medium">
							{accountLists('Состоит в клубах')}
						</div>

						<div className="u-mb-medium">
							{accountTables()}
						</div>

						<div className="u-mb-medium">
							{accountFeed()}
						</div>

					</main>
				</div>

				<div className="col-md-5 col-xl-3 u-mb-medium u-hidden-down@tablet">
					<div className="u-mb-medium" style={{ height: '199px' }}>
						<img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={avatar} alt="User's profile cover" />
					</div>

					{calendar()}

					<div className="u-mt-medium">
						<article class="c-event">
							<div class="c-event__img">
								<img src="https://picsum.photos/300/200" alt="San Francisco's Buildings" />
								<span class="c-event__status">Тренировка</span>
							</div>
							<div class="c-event__meta">
								<h3 class="c-event__title">Тренировка на стадионе
            <span class="c-event__place">Сегодня, 14:00</span>
								</h3>
							</div>
						</article>
					</div>
				</div>
			</div>
		</div>
	)
}
