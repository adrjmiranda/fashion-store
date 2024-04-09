import { FunctionComponent, ReactNode } from 'react';

// Style
import style from './style.module.scss';

// Data
import offersData from '../../assets/data/offers';
import OfferCard from '../offer-card';

const Offers: FunctionComponent = (): ReactNode => {
	return (
		<div className={style.offers}>
			<div className='wrapper'>
				<div className='session-info'>
					<h3 className='session-title'>Lorem Ipsum is therefore</h3>
					<p className='session-description'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
						sint dicta accusamus sit iusto tempore aut corporis itaque explicabo
						nostrum, perspiciatis vero suscipit consequatur reprehenderit fugiat
						veniam veritatis corrupti? Facilis?
					</p>
				</div>
				<div className={style.products}>
					{offersData.length > 0 &&
						offersData.map((item) => <OfferCard props={item} key={item.id} />)}
				</div>
			</div>
		</div>
	);
};

export default Offers;
