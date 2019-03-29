import React from 'react'
import navMenu from '../../components/navigation/navMenu';
import accountContacts from './accountContacts';
import accountFeed from './accountFeed';

import avatar from './avatar.jpg'
import accountCompetitions from './accountCompetitions';
import accountTables from './accountTables';
import accountTopInfo from './accountTopInfo';
import accountCalendar from './accountCalendar';
import accountLists from './accountLists';

export default function account() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-xl-4 u-hidden-down@wide">
					<aside className="c-menu u-ml-medium">

						<div className="u-mb-medium">
							{navMenu()}
						</div>

						{accountCompetitions()}

					</aside>
				</div>

				<div className="col-md-7 col-xl-5">
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
					<div className="u-mb-medium" style={{height: '199px'}}>
						<img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={avatar} alt="User's profile cover" />
					</div>

					{accountCalendar()}

				</div>
			</div>
		</div>
	)
}
