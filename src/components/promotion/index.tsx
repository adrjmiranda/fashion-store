import { FunctionComponent, ReactNode } from 'react';

// Style
import style from './style.module.scss';

// Image
import WomanBg from '../../assets/img/woman-bg.jpg';
import HeroBg from '../../assets/img/hero-bg.jpg';

const Promotion: FunctionComponent = (): ReactNode => {
	return (
		<div
			className={style.promotion}
			style={{
				backgroundImage:
					'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' +
					HeroBg +
					')',
			}}
		>
			<div className='wrapper'>
				<div className={style.content}>
					<div className={style.img}>
						<img src={WomanBg} alt='Woman' />
					</div>
					<div className={style.info}>
						<h4>Consectetur elit</h4>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia,
							nisi. Distinctio molestias iure, dicta voluptatum asperiores
							ducimus itaque perferendis quos nulla magni tempore debitis quod
							laborum quas accusamus modi vitae.
						</p>
						<a href='#' className='btn'>
							Shop
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Promotion;
