import React, { useEffect } from 'react'

export default function accountTables() {

	useEffect(() => {
		window.$("#datatable").DataTable({searching:!1,info:!1,lengthChange:!1,order:[],ordering:!0,columnDefs:[{orderable:!1,targets:"no-sort"}]})
	}, [])

	return (
		<div className="c-tabs">
			<ul className="c-tabs__list nav nav-tabs" id="myTab" role="tablist">
				<li><a className="c-tabs__link active" id="nav-table-tab" data-toggle="tab" href="#nav-table" role="tab" aria-controls="nav-table" aria-selected="true">Таблица</a></li>

				<li><a className="c-tabs__link" id="nav-profile-tab" data-toggle="tab" href="#nav-table" role="tab" aria-controls="nav-profile" aria-selected="false">Шахматка</a></li>

				<li><a className="c-tabs__link" id="nav-contact-tab" data-toggle="tab" href="#nav-table" role="tab" aria-controls="nav-contact" aria-selected="false">Расписание</a></li>
			</ul>
			<div className="c-tabs__content tab-content" id="nav-tabContent">

				<div className="c-tabs__pane active" id="nav-table" role="tabpanel" aria-labelledby="nav-table-tab">
					<table className="c-table dataTable no-footer" id="datatable" role="grid" aria-describedby="datatable_info" data-page-length='5'>

						<thead className="c-table__head c-table__head--slim">
							<tr className="c-table__row" role="row">
								<th className="c-table__cell c-table__cell--head no-sort sorting_disabled" rowSpan="1" colSpan="1" aria-label="Project">Команда</th>
								<th className="c-table__cell c-table__cell--head sorting" tabIndex="0" aria-controls="datatable" rowSpan="1" colSpan="1" aria-label="sotring">Игр</th>
								<th className="c-table__cell c-table__cell--head no-sort sorting_disabled" rowSpan="1" colSpan="1" aria-label="Leader + Team">В</th>
								<th className="c-table__cell c-table__cell--head sorting" tabIndex="0" aria-controls="datatable" rowSpan="1" colSpan="1" aria-label="sorting" >Н</th>
								<th className="c-table__cell c-table__cell--head no-sort sorting_disabled" rowSpan="1" colSpan="1" aria-label="Status">П</th>
								<th className="c-table__cell c-table__cell--head sorting" tabIndex="0" aria-controls="datatable" rowSpan="1" colSpan="1" aria-label="sorting" >О</th>
							</tr>
						</thead>

						<tbody>
							{Array(20).fill().map((_, index) =>
								<tr key={index} className="c-table__row odd" role="row">
									<td className="c-table__cell">Зенит</td>
									<td className="c-table__cell">7</td>
									<td className="c-table__cell">5</td>
									<td className="c-table__cell">1</td>
									<td className="c-table__cell">1</td>
									<td className="c-table__cell">16</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}
