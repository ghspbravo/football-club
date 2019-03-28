import React from 'react'
import { Link } from "react-router-dom";

import avatar from './avatar.png'

export default function headerProfile() {
	return (
		<div className="c-dropdown dropdown">
			<Link className="c-avatar c-avatar--xsmall has-dropdown dropdown-toggle" to="/" id="dropdwonMenuAvatar" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				<img className="c-avatar__img" src={avatar} alt="User's Profile" />
				<p className="u-ml-small">Иван Иванов</p>
			</Link>

			<div className="c-dropdown__menu dropdown-menu dropdown-menu-right" aria-labelledby="dropdwonMenuAvatar">
				<Link className="c-dropdown__item dropdown-item" to="/">Настройки</Link>
				<Link className="c-dropdown__item dropdown-item" to="/">Помощь</Link>
				<Link className="c-dropdown__item dropdown-item" to="/">Выход</Link>
			</div>
		</div>
	)
}
