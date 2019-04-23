import React from 'react'

export default function accountEditBasic() {
	return (
		<div>
			<div className="c-card u-p-medium">

				<div className="row no-gutters u-mb-large">
					<div class="c-avatar c-avatar--xlarge" style={{
						margin: '0 auto'
					}}>
						<img class="c-avatar__img" src="https://picsum.photos/200" alt="" />
					</div>

					<div className="col-12 u-mt-small u-text-center">
						<input type="file" name="photo" id="photo"/>
					</div>
				</div>



				<div className="c-field u-mb-small">
					<label className="c-field__label" for="name">Имя</label>
					<input className="c-input" id="name" type="text" />
				</div>

				<div className="c-field u-mb-small">
					<label className="c-field__label" for="surname">Фамилия</label>
					<input className="c-input" id="surname" type="text" />
				</div>

				<div class="c-field u-mb-small">
					<label className="c-field__label" for="selectGender">
						Пол
					</label>
					<select class="form-control m-input" id="selectGender">
						<option>Мужской</option>
						<option>Женский</option>
					</select>
				</div>

				<div className="c-field u-mb-small">
					<label className="c-field__label" for="birthdate">Дата рождения</label>
					<input className="c-input" id="birthdate" type="date" />
				</div>

				<div className="c-field u-mb-small">
					<label className="c-field__label" for="status">Статус</label>
					<input className="c-input" id="status" type="text" />
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
