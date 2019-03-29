import React, {useEffect} from 'react'
import navMenu from '../../components/navigation/navMenu';
import competitions from '../../components/competitions/competitions';

export default function calendar() {
	useEffect(() => {
		window.$(".js-calendar").fullCalendar({header:{left:"prev,next",center:"title",right:"month,agendaWeek,agendaDay"},dayNamesShort:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],timeFormat:"hh:mm a",events:[{title:"Sara's birthday",start:"2017-11-28",className:"fc-event--orange",allDay:!0},{title:"Jason",start:"2017-11-24",end:"2017-11-26",className:"fc-event--green",allDay:!0},{title:"Ruth in London",start:"2017-11-08",end:"2017-11-12",className:"fc-event--blue"},{title:"All Hands 4",start:"2017-11-27",className:"fc-event--green",allDay:!0},{title:"Carl",start:"2017-11-30",className:"fc-event--green"},{title:"Adam's birthday",start:"2017-12-28",className:"fc-event--orange",allDay:!0},{title:"Business Meeting",start:"2017-12-24",end:"2017-12-26",className:"fc-event--green",allDay:!0},{title:"Vist Japan",start:"2017-12-08",end:"2017-12-12",className:"fc-event--blue"},{title:"Buy New Mac",start:"2017-12-27",className:"fc-event--green",allDay:!0},{title:"New Product Launch",start:"2017-12-30",className:"fc-event--green"}]})
	})

	return (
		<div className="container">
			<div className="row">
				<div className="col-xl-4 u-hidden-down@wide">
					<aside className="c-menu u-ml-medium">

						<div className="u-mb-medium">
							{navMenu()}
						</div>

						{competitions()}
					</aside>
				</div>

				<div className="col-12 col-xl-8">
					<main>

						<div className="fc-header">
							<h2 className="fc-header-title">Все события</h2>
						</div>
						<div className="js-calendar"></div>

					</main>
				</div>
			</div>
		</div>
	)
}
