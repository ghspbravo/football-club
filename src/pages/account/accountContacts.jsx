import React from 'react'

export default function accountContacts() {
	return (
		<div className="c-card u-p-medium u-text-small">
			<h6 className="u-text-bold">Контактная информация</h6>

			<dl className="u-flex u-pv-small u-border-bottom">
				<dt className="u-width-25">Имя</dt>
				<dd>Иван Иванов</dd>
			</dl>

			<dl className="u-flex u-pv-small u-border-bottom">
				<dt className="u-width-25">Телефон</dt>
				<dd>+7 (912) 123-45-67</dd>
			</dl>

			<dl className="u-flex u-pv-small u-border-bottom">
				<dt className="u-width-25">E-mail</dt>
				<dd><a rel="noopener noreferrer" target="_blank" href="mailto:ivan.ivanov@yandex.ru">ivan.ivanov@yandex.ru</a></dd>
			</dl>

			<dl className="u-flex u-pv-small u-border-bottom">
				<dt className="u-width-25">Вконтакте</dt>
				<dd><a rel="noopener noreferrer" target="_blank" href="vk.com">Иван Иванов</a></dd>
			</dl>

			<dl className="u-flex u-pv-small">
				<dt className="u-width-25">Instagram</dt>
				<dd><a rel="noopener noreferrer" target="_blank" href="instagram.com">@ivan_ivanov</a></dd>
			</dl>

		</div>
	)
}
