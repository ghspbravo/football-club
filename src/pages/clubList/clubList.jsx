import React from 'react'

import navMenu from '../../components/navigation/navMenu';
import competitions from '../../components/competitions/competitions';
import listItem from '../../components/listItem/listItem';
import clubSearchFilter from '../../components/searchFilters/clubSearchFilter';

import thumb from './app-icon5.png'

export default function clubList() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-xl-3 u-hidden-down@wide">
					<aside className="c-menu u-ml-medium">

						<div className="u-mb-medium">
							{navMenu()}
						</div>

						{competitions()}
					</aside>
				</div>

				<div className="col-lg-3 order-lg-2">
					{clubSearchFilter()}
				</div>

				<div className="col-lg-6 order-lg-1">
					<div className="row">
						{Array(5).fill().map((_, index) => <div key={index} className="col-12">
							{listItem({
								title: 'ФК Уралмаш',
								link: '/clubs/1',
								logo: thumb,
								descriptionItems: [
									'Район: центр',
									'Численность: 10',
									'Свободных мест: 2'
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
