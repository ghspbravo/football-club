import React from 'react'

export default function accountEditContacts() {
	return (
		<div>
			<div className="c-card u-p-medium">

				<div className="c-field u-mb-small">
					<label className="c-field__label" for="name">Страна</label>
					<input className="c-input" id="name" type="text" />
				</div>

				<div className="c-field u-mb-small">
					<label className="c-field__label" for="surname">Город</label>
					<input className="c-input" id="surname" type="text" />
				</div>

				<div className="c-field u-mb-small">
					<label className="c-field__label" for="birthdate">Телефон</label>
					<input className="c-input" id="birthdate" type="date" />
				</div>

				<div className="c-field u-mb-small">
					<label className="c-field__label" for="status">Email</label>
					<input className="c-input" id="status" type="text" />
				</div>

				<fieldset className="u-p-xsmall u-mb-small">
					<legend>Социальные сети</legend>

					<div className="c-field u-mb-small">
						<label className="c-field__label" for="status">Twitter</label>
						<input className="c-input" id="status" type="text" />
					</div>
					
					<div className="c-field u-mb-small">
						<label className="c-field__label" for="status">Facebook</label>
						<input className="c-input" id="status" type="text" />
					</div>
				</fieldset>

				<div className="row no-gutters">
					<button style={{
						marginLeft: 'auto'
					}} className="c-btn c-btn--success">Сохранить</button>
				</div>

			</div>
		</div>
	)
}
