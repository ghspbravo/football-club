import React from 'react'

export default function headerSearch() {
	return (
		<div className="c-field has-icon-right c-navbar__search">
			<span className="c-field__icon">
				<i className="fa fa-search"></i>
			</span>

			<label className="u-hidden-visually" for="navbar-search">Seach</label>
			<input className="c-input" id="navbar-search" type="text" placeholder="Search" />
		</div>
	)
}
