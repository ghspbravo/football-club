import React from 'react'
import { Link } from 'react-router-dom'

export default function calendar() {
	return (
		<div className="c-calendar u-text-xsmall">
			<nav className="c-calendar__nav">
				<a href="/" className="c-calendar__control"><i className="fa fa-caret-left"></i></a>
				<strong className="c-calendar__header">August 2017</strong>
				<a href="/" className="c-calendar__control"><i className="fa fa-caret-right"></i></a>
			</nav>

			<table className="c-calendar__picker">
				<thead>
					<tr>
						<th className="c-calendar__day"><abbr title="Sunday">Sun</abbr></th>
						<th className="c-calendar__day"><abbr title="Monday">Mon</abbr></th>
						<th className="c-calendar__day"><abbr title="Tuesday">Tue</abbr></th>
						<th className="c-calendar__day"><abbr title="Wednesday">Wed</abbr></th>
						<th className="c-calendar__day"><abbr title="Thursday">Thu</abbr></th>
						<th className="c-calendar__day"><abbr title="Friday">Fri</abbr></th>
						<th className="c-calendar__day"><abbr title="Saturday">Sat</abbr></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="c-calendar__date is-disabled">28</td>
						<td className="c-calendar__date is-disabled">29</td>
						<td className="c-calendar__date is-disabled">30</td>
						<td className="c-calendar__date is-disabled">31</td>
						<td className="c-calendar__date"><Link style={{color: '#354052'}} to="/development">1</Link></td>
						<td className="c-calendar__date"><Link style={{color: '#354052'}} to="/development">2</Link></td>
						<td className="c-calendar__date"><Link style={{color: '#354052'}} to="/development">3</Link></td>
					</tr>
					<tr>
						<td className="c-calendar__date"><Link style={{color: '#354052'}} to="/development">4</Link></td>
						<td className="c-calendar__date"><Link style={{color: '#354052'}} to="/development">5</Link></td>
						<td className="c-calendar__date"><Link style={{color: '#354052'}} to="/development">6</Link></td>
						<td className="c-calendar__date is-active"><Link style={{color: 'white'}} to="/development">7</Link></td>
						<td className="c-calendar__date"><Link style={{color: '#354052'}} to="/development">8</Link></td>
						<td className="c-calendar__date"><Link style={{color: '#354052'}} to="/development">9</Link></td>
						<td className="c-calendar__date"><Link style={{color: '#354052'}} to="/development">10</Link></td>
					</tr>

					<tr>
						<td className="c-calendar__date"><Link style={{color: '#354052'}} to="/development">11</Link></td>
						<td className="c-calendar__date"><Link style={{color: '#354052'}} to="/development">12</Link></td>
						<td className="c-calendar__date"><Link style={{color: '#354052'}} to="/development">13</Link></td>
						<td className="c-calendar__date"><Link style={{color: '#354052'}} to="/development">14</Link></td>
						<td className="c-calendar__date"><Link style={{color: '#354052'}} to="/development">15</Link></td>
						<td className="c-calendar__date"><Link style={{color: '#354052'}} to="/development">16</Link></td>
						<td className="c-calendar__date"><Link style={{color: '#354052'}} to="/development">17</Link></td>
					</tr>

					<tr>
						<td className="c-calendar__date"><Link style={{color: '#354052'}} to="/development">18</Link></td>
						<td className="c-calendar__date"><Link style={{color: '#354052'}} to="/development">19</Link></td>
						<td className="c-calendar__date"><Link style={{color: '#354052'}} to="/development">20</Link></td>
						<td className="c-calendar__date"><Link style={{color: '#354052'}} to="/development">21</Link></td>
						<td className="c-calendar__date"><Link style={{color: '#354052'}} to="/development">22</Link></td>
						<td className="c-calendar__date"><Link style={{color: '#354052'}} to="/development">23</Link></td>
						<td className="c-calendar__date"><Link style={{color: '#354052'}} to="/development">24</Link></td>
					</tr>


					<tr>
						<td className="c-calendar__date"><Link style={{color: '#354052'}} to="/development">25</Link></td>
						<td className="c-calendar__date"><Link style={{color: '#354052'}} to="/development">26</Link></td>
						<td className="c-calendar__date"><Link style={{color: '#354052'}} to="/development">27</Link></td>
						<td className="c-calendar__date"><Link style={{color: '#354052'}} to="/development">28</Link></td>
						<td className="c-calendar__date"><Link style={{color: '#354052'}} to="/development">29</Link></td>
						<td className="c-calendar__date"><Link style={{color: '#354052'}} to="/development">30</Link></td>
					</tr>

				</tbody>
			</table>
		</div>
	)
}
