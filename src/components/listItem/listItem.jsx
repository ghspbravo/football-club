import React from 'react'
import {Link} from 'react-router-dom'

import thumb from './app-icon5.png'

export default function item() {
	return (
		<Link to="/clubs/1" style={{ display: 'block', textDecoration: 'none' }} className="c-search-result">

			<div className="o-media">
				<div className="o-media__img u-mr-small">
					<div className="c-avatar c-avatar--medium">
						<img className="c-avatar__img" src={thumb} alt="thumb" />
					</div>

				</div>
				<div className="o-media__body">
					<h4 className="c-search-result__title">ФК Уралмаш</h4>
					<p className="c-search-result__meta">Район: центр</p>
					<p className="c-search-result__meta">Численность: 10</p>
					<p className="c-search-result__meta">Свободных мест: 2</p>
				</div>
			</div>

			<ul className="c-search-result__actionlist">
				<li className="c-search-result__action">
					<button className="c-btn c-btn--success c-btn--fullwidth"><i className="fa fa-envelope-o"></i> подписаться</button>
				</li>

			</ul>

		</Link>
	)
}
