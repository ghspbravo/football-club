import React from 'react'

export default function accountEditSecurity() {
	return (
		<div>
			<div className="c-card u-p-medium">

				<div className="c-field u-mb-small">
					<label className="c-field__label" for="name">Пароль</label>
					<input className="c-input" id="name" type="password" />
				</div>

				<div className="row no-gutters">
					<button style={{
						marginLeft: 'auto'
					}} className="c-btn c-btn--success">Сохранить</button>
				</div>

			</div>
		</div>
	)
}
