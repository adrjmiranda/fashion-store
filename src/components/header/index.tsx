import { FunctionComponent, ReactNode } from 'react';

// Style
import style from './style.module.scss';

// Components
import Navbar from '../navbar';
import MainBanner from '../main-banner';

const Header: FunctionComponent = (): ReactNode => {
	return (
		<header>
			<Navbar />
			<MainBanner />
		</header>
	);
};

export default Header;
