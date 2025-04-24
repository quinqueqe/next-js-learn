import ButtonGoogle from '@/shared/compontents/buttonGoogle'


const Login = () => {
	return (
		<div className='login-container'>
			<form className='login-form'>
				<label htmlFor='email' className='login-label'>
					Email
				</label>
				<input
					id='email'
					type='email'
					className='login-input'
					placeholder='Введите ваш email'
					required
				/>

				<label htmlFor='password' className='login-label'>
					Пароль
				</label>
				<input
					id='password'
					type='password'
					className='login-input'
					placeholder='Введите пароль'
					required
				/>

				<button type='submit' className='login-button'>
					Войти
				</button>
				<ButtonGoogle />
			</form>
		</div>
	)
}
export default Login
