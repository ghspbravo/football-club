import React from 'react'

import navMenu from '../../components/navigation/navMenu';
import listItem from '../../components/listItem/listItem';
import competitionSearchFilter from '../../components/searchFilters/competitionSearchFilter';

import thumb from './app-icon5.png'

export default function competitionList() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-xl-3 u-hidden-down@wide">
					<aside className="c-menu u-ml-medium">

						<div className="u-mb-medium">
							{navMenu()}
						</div>

					</aside>
				</div>

				<div className="col-lg-3 order-lg-2">
					{competitionSearchFilter()}
				</div>

				<div className="col-lg-6 order-lg-1">
					<div className="row">
						{Array(5).fill().map((_, index) => <div key={index} className="col-12">
							{listItem({
								title: 'Турнир за титул чемпиона',
								link: '/competitions/1',
								logo: thumb,
								descriptionItems: [
									'Дата: 12.12.12',
								]
							})}
						</div>)}

					</div>

					{/* <div className="row u-mb-xlarge">
						<div className="col-12">
							<nav className="c-pagination u-justify-center">
								<ul className="c-pagination__list">
									<li className="c-pagination__item">
										<a className="c-pagination__control" href="#">
											<i className="fa fa-caret-left"></i>
										</a>
									</li>

									<li className="c-pagination__item"><a className="c-pagination__link" href="#">1</a></li>
									<li className="c-pagination__item"><a className="c-pagination__link" href="#">2</a></li>
									<li className="c-pagination__item">
										<a className="c-pagination__link is-active" href="#">3</a>
									</li>
									<li className="c-pagination__item"><a className="c-pagination__link" href="#">4</a></li>

									<li className="c-pagination__item">
										<a className="c-pagination__control" href="#">
											<i className="fa fa-caret-right"></i>
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div> */}
				</div>

			</div>
		</div>
	)
}
