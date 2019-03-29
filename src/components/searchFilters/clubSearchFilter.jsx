import React from 'react'

export default function clubSearchFilter() {
	return (
		<form className="c-search-form c-search-form--dark">

			<h5 className="c-search-form__label">Сортировать по</h5>
			<div className="c-search-form__section u-flex">
				<div className="c-choice c-choice--radio u-mr-small">
					<input className="c-choice__input" id="radio1" name="radios" type="radio" />
					<label className="c-choice__label" htmlFor="radio1">Релевантности</label>
				</div>

				<div className="c-choice c-choice--radio">
					<input className="c-choice__input" id="radio2" name="radios" type="radio" />
					<label className="c-choice__label" htmlFor="radio2">Имени</label>
				</div>
			</div>

			<div className="c-search-form__section">
				<div className="c-field has-icon-left">
					<span className="c-field__icon"><i className="fa fa-map-marker"></i></span>
					<label className="c-field__label c-search-form__label" htmlFor="search-location">Город</label>
					<input className="c-input" id="search-location" type="text" placeholder="Все" />
					<small className="c-field__message">Введите название города, страны или региона</small>
				</div>
			</div>

			<div className="c-search-form__section">
				<div className="c-field has-icon-left">
					<span className="c-field__icon"><i className="fa fa-user-o"></i></span>
					<label className="c-field__label c-search-form__label" htmlFor="search-position">Роль</label>
					<input className="c-input" id="search-position" type="text" placeholder="Любая" />
					<small className="c-field__message">Введите вашу позицию</small>
				</div>
			</div>

			<div className="c-search-form__section">
				<div className="c-choice c-choice--checkbox">
					<input className="c-choice__input" id="checkbox1" name="checkboxes" type="checkbox" />
					<label className="c-choice__label" htmlFor="checkbox1">Искать только вакантные клубы</label>
				</div>
			</div>

			<button className="c-btn c-btn--info c-btn--fullwidth" type="submit">Поиск</button>
		</form>
	)
}
