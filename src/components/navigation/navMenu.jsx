import React from 'react'
import { Link } from "react-router-dom";

export default function navMenu() {
	return (
		<ul>
			<li className="c-menu__item">
				<Link className="c-menu__link is-active" to="/">
					<i className="fa fa-trophy u-mr-xsmall"></i>Моя страница
				</Link>
			</li>
			<li className="c-menu__item">
				<Link className="c-menu__link" to="/">
					<i className="c-menu__icon fa fa-heart-o"></i>Календарь
        </Link>
			</li>
			<li className="c-menu__item">
				<Link className="c-menu__link" to="/">
					<i className="c-menu__icon fa fa-bullhorn"></i>Клубы
        </Link>
			</li>
			<li className="c-menu__item">
				<Link className="c-menu__link" to="/">
					<i className="c-menu__icon fa fa-newspaper-o"></i>Соревнования
        </Link>
			</li>
			<li className="c-menu__item">
				<Link className="c-menu__link" to="/">
					<i className="c-menu__icon fa fa-diamond"></i>Статистика
				</Link>
			</li>
		</ul>
	)
}
