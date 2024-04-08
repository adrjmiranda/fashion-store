import { FunctionComponent, ReactNode } from 'react';

// Style
import style from './style.module.scss';

// Components
import Logo from '../logo';

// Icons
import { BsSearch } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';
import { ImPinterest2 } from 'react-icons/im';
import { RiFacebookBoxLine } from 'react-icons/ri';

const Navbar: FunctionComponent = (): ReactNode => {
	return (
		<div className={style.navbar}>
			<nav className='wrapper'>
				<ul className={style.menu_left}>
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#'>Women's</a>
					</li>
					<li>
						<a href='#'>Men's</a>
					</li>
					<li>
						<a href='#'>Shop</a>
					</li>
					<li>
						<a href='#'>Blog</a>
					</li>
					<li>
						<a href='#'>Contact</a>
					</li>
				</ul>
				<Logo />
				<ul className={style.menu_right}>
					<li>
						<a href='#' target='_blank'>
							<GrInstagram />
						</a>
					</li>
					<li>
						<a href='#' target='_blank'>
							<ImPinterest2 />
						</a>
					</li>
					<li>
						<a href='#' target='_blank'>
							<RiFacebookBoxLine />
						</a>
					</li>
					<li>
						<form action='#'>
							<input type='search' name='search' placeholder='Search' />
							<button type='submit'>
								<BsSearch />
							</button>
						</form>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
