import { FunctionComponent, ReactNode } from 'react';

// Style
import style from './style.module.scss';

// Icons
import { IoBagHandle } from 'react-icons/io5';

const Logo: FunctionComponent = (): ReactNode => {
	return (
		<a href='#' className={style.logo}>
			<IoBagHandle />
			<span>Fashion</span>
			<span>Store</span>
		</a>
	);
};

export default Logo;
