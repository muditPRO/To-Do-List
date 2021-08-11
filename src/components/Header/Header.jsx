import "./Header.css";

const Header = ({ theme, toggleTheme }) => {
	return (
		<div className='header' style={{ backgroundColor: theme.header }}>
			<div className='title' style={{ color: theme.color }}>
				todos
			</div>
			<svg
				className='theme-toggle'
				onClick={toggleTheme}
				width='36'
				height='36'
				viewBox='0 0 36 36'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M18 24C19.5913 24 21.1174 23.3679 22.2426 22.2426C23.3679 21.1174 24 19.5913 24 18C24 16.4087 23.3679 14.8826 22.2426 13.7574C21.1174 12.6321 19.5913 12 18 12V24Z'
					fill={theme.color}
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M18 3C9.7155 3 3 9.7155 3 18C3 26.2845 9.7155 33 18 33C26.2845 33 33 26.2845 33 18C33 9.7155 26.2845 3 18 3ZM18 6V12C16.4087 12 14.8826 12.6321 13.7574 13.7574C12.6321 14.8826 12 16.4087 12 18C12 19.5913 12.6321 21.1174 13.7574 22.2426C14.8826 23.3679 16.4087 24 18 24V30C21.1826 30 24.2348 28.7357 26.4853 26.4853C28.7357 24.2348 30 21.1826 30 18C30 14.8174 28.7357 11.7652 26.4853 9.51472C24.2348 7.26428 21.1826 6 18 6V6Z'
					fill={theme.color}
				/>
			</svg>
		</div>
	);
};

export default Header;
