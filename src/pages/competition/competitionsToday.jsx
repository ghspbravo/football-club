import React from 'react'

export default function competitionsToday() {
	return (
		<div className="c-card u-pv-medium u-ph-xsmall">
			<h6 className="u-text-bold">Сегодня</h6>

			<table className="c-table">
				<tbody>
					<tr className="c-table__row">
						<td className="c-table__cell u-text-mute" style={{ padding: '10px 0 10px 10px' }}>11:00</td>
						<td className="c-table__cell" style={{
							padding: '10px 0 10px 10px',
							whiteSpace: 'normal'
						}}>Динамо М — Иртыш П</td>
					</tr>
					<tr className="c-table__row">
						<td className="c-table__cell u-text-mute" style={{ padding: '10px 0 10px 10px' }}>17:00</td>
						<td className="c-table__cell" style={{
							padding: '10px 0 10px 10px',
							whiteSpace: 'normal'
						}}>ДинамоИртыш М — Иртыш Иртыш П</td>
					</tr>
					<tr className="c-table__row">
						<td className="c-table__cell u-text-mute" style={{ padding: '10px 0 10px 10px' }}>21:00</td>
						<td className="c-table__cell" style={{
							padding: '10px 0 10px 10px',
							whiteSpace: 'normal'
						}}>Динамо М — Иртыш П</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}
