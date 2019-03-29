import React from 'react'
import { Link } from 'react-router-dom'

export default function authLogin() {
	return (
		<div className="m-login__signin">
			<div className="m-login__head">
				<h3 className="m-login__title">
					Войти
										</h3>
			</div>
			<form className="m-login__form m-form" action="">
				<div className="form-group m-form__group">
					<input className="form-control m-input" type="text" placeholder="Email" name="email" autoComplete="off" />
				</div>
				<div className="form-group m-form__group">
					<input className="form-control m-input m-login__form-input--last" type="password" placeholder="Password" name="password" />
				</div>
				<div className="row m-login__form-sub">
					<div className="col m--align-left">
						<label className="m-checkbox m-checkbox--focus">
							<input type="checkbox" name="remember" />
							Remember me
													<span></span>
						</label>
					</div>
					<div className="col m--align-right">
						<Link to="/auth/recover" id="m_login_forget_password" className="m-link">
							Forget Password ?
						</Link>
					</div>
				</div>
				<div className="m-login__form-action">
					<Link to="/accaunt" id="m_login_signin_submit" className="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air">
						Sign In
					</Link>
				</div>
			</form>
			<div className="m-stack__item m-stack__item--center">
				<div className="m-login__account">
					<span className="m-login__account-msg">
						Don't have an account yet ?
								</span>
					&nbsp;&nbsp;
								<Link to="/auth/register" id="m_login_signup" className="m-link m-link--focus m-login__account-link">
						Sign Up
								</Link>
				</div>
			</div>
		</div>
	)
}
