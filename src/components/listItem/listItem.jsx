import React from 'react'
import {Link} from 'react-router-dom'
/**
 * 
 * @param {{title: String, link: String, logo: String, descriptionItems: Array.<String>}} content - info
 */
export default function item(content) {
	return (
		<Link to={content.link} style={{ display: 'block', textDecoration: 'none' }} className="c-search-result">

			<div className="o-media">
				<div className="o-media__img u-mr-small">
					<div className="c-avatar c-avatar--medium">
						<img className="c-avatar__img" src={content.logo} alt="thumb" />
					</div>

				</div>
				<div className="o-media__body">
					<h4 className="c-search-result__title">{content.title}</h4>
					{content.descriptionItems.map((item, index) => <p key={index} className="c-search-result__meta">{item}</p>)}
				</div>
			</div>

			{/* <ul className="c-search-result__actionlist">
				<li className="c-search-result__action">
					<button className="c-btn c-btn--success c-btn--fullwidth"><i className="fa fa-envelope-o"></i> подписаться</button>
				</li>

			</ul> */}

		</Link>
	)
}
