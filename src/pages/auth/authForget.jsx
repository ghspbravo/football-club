import React from 'react'
import { Link } from 'react-router-dom'

export default function authForget() {
	return (
		<div className="m-login__forget-password" style={{display: 'block'}}>
			<div className="m-login__head">
				<h3 className="m-login__title">
					Forgotten Password ?
										</h3>
				<div className="m-login__desc">
					Enter your email to reset your password:
										</div>
			</div>
			<form className="m-login__form m-form" action="">
				<div className="form-group m-form__group">
					<input className="form-control m-input" type="text" placeholder="Email" name="email" id="m_email" autoComplete="off" />
				</div>
				<div className="m-login__form-action row">
					<div className="col-6">
						<button style={{paddingLeft: '2rem', paddingRight: '2rem'}} id="m_login_forget_password_submit" className="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air">
							Request
												</button>
					</div>
					<div className="col-6">
						<Link to="/auth/login" style={{paddingLeft: '2rem', paddingRight: '2rem'}} id="m_login_forget_password_cancel" className="btn btn-outline-focus m-btn m-btn--pill m-btn--custom">
							Cancel
												</Link>
					</div>
				</div>
			</form>
		</div>
	)
}
