import React from 'react'

export default function accountEditBiography() {
	return (
		<div>
			<div className="c-card u-p-medium">

				<div className="c-field u-mb-small">
					<label className="c-field__label" for="name">Деятельность</label>
					<textarea className="c-input" id="name" type="text" />
				</div>

				<div className="c-field u-mb-small">
					<label className="c-field__label" for="name">Интересы</label>
					<textarea className="c-input" id="name" type="text" />
				</div>

				<div className="c-field u-mb-small">
					<label className="c-field__label" for="name">Биография</label>
					<textarea className="c-input" id="name" type="text" />
				</div>

				<div className="c-field u-mb-small">
					<label className="c-field__label" for="name">О себе</label>
					<textarea className="c-input" id="name" type="text" />
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
