import React from 'react'
import { Link } from "react-router-dom";

import avatar from './avatar.png'

export default function headerProfile() {
	return (
		<div className="c-dropdown dropdown">
			<a className="c-avatar c-avatar--xsmall has-dropdown dropdown-toggle" href="/" id="dropdwonMenuAvatar" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				<img className="c-avatar__img" src={avatar} alt="User's Profile" />
				<p className="u-ml-small">Иван Иванов</p>
			</a>

			<div className="c-dropdown__menu dropdown-menu dropdown-menu-right" aria-labelledby="dropdwonMenuAvatar">
				<Link className="c-dropdown__item dropdown-item" to="/profile/edit">Настройки</Link>
				<Link className="c-dropdown__item dropdown-item" to="/development">Помощь</Link>
				<Link className="c-dropdown__item dropdown-item" to="/auth/login">Выход</Link>
			</div>
		</div>
	)
}
