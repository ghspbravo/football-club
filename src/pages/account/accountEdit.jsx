import React from 'react'
import {NavLink, Switch, Route} from 'react-router-dom'
import navMenu from '../../components/navigation/navMenu';
import competitions from '../../components/competitions/competitions';
import './accountEdit.css'
import accountEditBasic from './edit/accountEditBasic';
import accountEditContacts from './edit/accountEditContacts';
import accountEditBiography from './edit/accountEditBiography';
import accountEditSecurity from './edit/accountEditSecurity';
import accountEditCareer from './edit/accountEditCareer';
export default function accountEdit() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-xl-3 u-hidden-down@wide">
					<div className="c-menu u-ml-medium">

						<div className="u-mb-medium">
							{navMenu()}
						</div>

						{competitions()}

					</div>
				</div>

				<div className="col-md-7 col-xl-6">
					<main>

						<Switch>
							<Route path="/profile/edit/contacts" component={accountEditContacts} />
							<Route path="/profile/edit/biography" component={accountEditBiography} />
							<Route path="/profile/edit/career" component={accountEditCareer} />
							<Route path="/profile/edit/security" component={accountEditSecurity} />
							<Route path="/profile/edit/" component={accountEditBasic} />
						</Switch>

					</main>
				</div>

				<div className="col-md-5 col-xl-3 u-mb-medium u-hidden-down@tablet">
					<div>
						<ul className="c-card u-pv-xsmall edit-sidenav c-sidebar__list">
							<li className="c-sidebar__item edit-sidenav__item">
								<NavLink exact activeClassName="is-active" to='/profile/edit/' className="c-sidebar__link edit-sidenav__link">
									<i className="fa fa-home u-mr-xsmall"></i>Основное
	                </NavLink>
							</li>
							<li className="c-sidebar__item edit-sidenav__item">
								<NavLink exact activeClassName="is-active" to='/profile/edit/contacts' className="c-sidebar__link edit-sidenav__link">
									<i className="fa fa-pie-chart u-mr-xsmall"></i>Контакты
	                </NavLink>
							</li>
							<li className="c-sidebar__item edit-sidenav__item">
								<NavLink exact activeClassName="is-active" to='/profile/edit/career' className="c-sidebar__link edit-sidenav__link">
									<i className="fa fa-home u-mr-xsmall"></i>Спортивная жизнь
	                </NavLink>
							</li>
							<li className="c-sidebar__item edit-sidenav__item">
								<NavLink exact activeClassName="is-active" to='/profile/edit/biography' className="c-sidebar__link edit-sidenav__link">
									<i className="fa fa-home u-mr-xsmall"></i>Биография и интересы
	                </NavLink>
							</li>
							<li className="c-sidebar__item edit-sidenav__item">
								<NavLink exact activeClassName="is-active" to='/profile/edit/security' className="c-sidebar__link edit-sidenav__link">
									<i className="fa fa-home u-mr-xsmall"></i>Безопасность
	                </NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
