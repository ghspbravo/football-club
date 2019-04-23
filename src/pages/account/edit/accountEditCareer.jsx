import React from 'react'

export default function accountEditCareer() {
	return (
		<div>
			<div className="c-card u-p-medium">

				<div className="u-mb-small">
					{Array(10).fill().map((_, index) => <div key={index} className="c-message">
						<div className="o-media">
							<div className="o-media__img u-mr-small">
								<div className="c-avatar c-avatar--small">
									<img className="c-avatar__img" src="https://picsum.photos/200" alt="competition thumb" />
								</div>
							</div>
							<div className="o-media__body">
								<h4 className="c-message__title">Кубок ЖБИ
							<span className="c-message__title-meta">Минифутбол</span></h4>
							</div>
						</div>
					</div>
					)}
				</div>

				<div className="row no-gutters">
					<button style={{
						marginLeft: 'auto'
					}} className="c-btn c-btn--success">Сохранить</button>
				</div>

			</div>
		</div>
	)
}
