import React from 'react'

import avatar from './avatar.jpg'
import feed_6 from './feed6.jpg'
import feed_7 from './feed7.jpg'

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
					<ol className="c-stream" style={{ marginBottom: 0 }}>
						<li className="c-stream-item o-media">

							<div className="o-media__img u-mr-small">
								<div className="c-avatar c-avatar--medium">
									<img className="c-avatar__img" src={avatar} alt="Adam's face" />
								</div>
							</div>

							<div className="c-stream-item__content o-media__body">
								<div className="c-stream-item__header">
									<a className="c-stream-item__name" href="/">Mollie Richardson<span className="c-stream-item__username">@Mollie</span>
									</a>
									<span className="c-stream-item__time">3m</span>
								</div>

								<p className="u-mb-small">I shared this on my fb wall a few months back, and I thought I'd share it here again because it's such a great read. "You already found your passion.” You are just ignoring it. The problem isn't passion. It's never passion. It's priorities.</p>

								<div className="c-stream-item__gallery">
									<img src={feed_6} alt="Unsplash" />
									<img src={feed_7} alt="Unsplash" />
								</div>

							</div>

						</li>

						<li className="c-stream-item o-media">

							<div className="o-media__img u-mr-small">
								<div className="c-avatar c-avatar--medium">
									<img className="c-avatar__img" src={avatar} alt="Adam's face" />
								</div>
							</div>

							<div className="c-stream-item__content o-media__body">
								<div className="c-stream-item__header">
									<a className="c-stream-item__name" href="/">Mollie Richardson<span className="c-stream-item__username">@Mollie</span>
									</a>
									<span className="c-stream-item__time">3m</span>
								</div>

								<p className="u-mb-small">I shared this on my fb wall a few months back, and I thought I'd share it here again because it's such a great read. "You already found your passion.” You are just ignoring it. The problem isn't passion. It's never passion. It's priorities.</p>

							</div>

						</li>

					</ol>
				</div>

			</div>
		</div>
	)
}
