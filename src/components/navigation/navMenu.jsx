import React from 'react'
import { NavLink } from "react-router-dom";

export default function navMenu() {
	return (
		<ul>
			<li className="c-menu__item">
				<NavLink activeClassName="is-active" className="c-menu__link" to="/accaunt">
					<i className="fa fa-trophy u-mr-xsmall"></i>Моя страница
				</NavLink>
			</li>
			<li className="c-menu__item">
				<NavLink activeClassName="is-active" className="c-menu__link" to="/development">
					<i className="c-menu__icon fa fa-heart-o"></i>Календарь
        </NavLink>
			</li>
			<li className="c-menu__item">
				<NavLink activeClassName="is-active" className="c-menu__link" to="/clubs">
					<i className="c-menu__icon fa fa-bullhorn"></i>Клубы
        </NavLink>
			</li>
			<li className="c-menu__item">
				<NavLink activeClassName="is-active" className="c-menu__link" to="/competitions">
					<i className="c-menu__icon fa fa-newspaper-o"></i>Соревнования
        </NavLink>
			</li>
			<li className="c-menu__item">
				<NavLink activeClassName="is-active" className="c-menu__link" to="/development">
					<i className="c-menu__icon fa fa-diamond"></i>Статистика
				</NavLink>
			</li>
		</ul>
	)
}
