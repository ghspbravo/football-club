import React from 'react'

export default function inDevelop(props) {
	/**
	 * Handle back navigation
	 * @param {Event} e
	 */
	const handleBackLink = e => {
		e.preventDefault()
		props.history.goBack()
	}
	
	return (
		<div className="c-error">
			<header className="c-error__head">
				<span className="c-error__icon">
					<i className="u-h2 fa fa-cogs"></i>
				</span>
				<h3>Страница в разработке!</h3>
			</header>

			<div className="c-error__body">
				<div className="row u-justify-center">
					<div className="col-sm-10">
						<h2 className="u-h5">Кажется здесь должно что-то быть, но пока ничего нет.. К счастью есть хорошие новости! Скоро все будет в лучшем виде :)</h2>
					</div>
				</div>
			</div>

			<footer className="c-error__footer">
				<a href="/" className="c-error__footer-link u-left" onClick={handleBackLink}>
					<i className="fa fa-long-arrow-left"></i>Назад
				</a>
			</footer>
		</div>
	)
}
