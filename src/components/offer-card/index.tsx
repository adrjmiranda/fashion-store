import { FunctionComponent, ReactNode } from 'react';

// Style
import style from './style.module.scss';

// Icons
import { BsArrowsAngleExpand } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { IoBagOutline } from 'react-icons/io5';
import { IoMdStar, IoMdStarOutline } from 'react-icons/io';

// Props
interface OfferCardProps {
	id: number;
	img: string;
	name: string;
	rate: number;
	price: number;
}

const OfferCard: FunctionComponent<{ props: OfferCardProps }> = ({
	props,
}): ReactNode => {
	const rateInfo = (rate: number): JSX.Element[] => {
		let rating: JSX.Element[] = [];

		for (let i = 0; i < 5; i++) {
			if (i < rate) {
				rating.push(
					<div key={i}>
						<IoMdStar />
					</div>
				);
			} else {
				rating.push(
					<div key={i}>
						<IoMdStarOutline />
					</div>
				);
			}
		}

		return rating;
	};

	return (
		<div className={style.offer_card}>
			<div className={style.img}>
				<img src={props.img} alt={props.name} />
				<div className={style.actions}>
					<button type='button'>
						<BsArrowsAngleExpand />
					</button>
					<button type='button'>
						<FaRegHeart />
					</button>
					<button type='button'>
						<IoBagOutline />
					</button>
				</div>
			</div>
			<div className={style.info}>
				<h4>{props.name}</h4>
				<div className={style.rating}>{rateInfo(props.rate)}</div>
				<span>$ {props.price}</span>
			</div>
		</div>
	);
};

export default OfferCard;
