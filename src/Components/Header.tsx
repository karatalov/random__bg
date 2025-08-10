import { RiMovie2AiFill } from 'react-icons/ri'
import './Header.scss'

const Header = () => {
	return (
		<header id='header'>
			<div className='container'>
				<div className='header'>
					<div className='header--nav'>
						<a href='#'>Home</a>
						<a href='#'>About</a>
						<a href='#'>Information</a>
						<a href='#'>Contact Us</a>
					</div>
					<RiMovie2AiFill className='header--icons' />
				</div>
			</div>
		</header>
	)
}

export default Header
