import React from 'react'

import feed from '../../components/newsFeed/feed';

export default function accountFeed() {
	return (
		<div className="c-tabs">
			<ul className="c-tabs__list nav nav-tabs" id="myTab" role="tablist">
				<li><a className="c-tabs__link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Все новости</a></li>

				<li><a className="c-tabs__link" id="nav-profile-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-profile" aria-selected="false">Моя лента</a></li>

				<li><a className="c-tabs__link" id="nav-contact-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-contact" aria-selected="false">Клубы</a></li>
			</ul>
			<div className="c-tabs__content tab-content" id="nav-tabContent">

				<div className="c-tabs__pane active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" style={{ padding: 0 }}>
					{feed()}
				</div>

			</div>
		</div>
	)
}
