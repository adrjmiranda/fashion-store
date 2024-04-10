import { FunctionComponent, ReactNode } from 'react';

// Style
import style from './style.module.scss';

// Icons
import { BsShop } from 'react-icons/bs';
import { FaMoneyBillWave } from 'react-icons/fa6';
import { RiUserLocationLine } from 'react-icons/ri';
import { MdSecurity } from 'react-icons/md';

const Benefits: FunctionComponent = (): ReactNode => {
	return (
		<div className={style.benefits}>
			<div className={style.item}>
				<div className={style.icon}>
					<BsShop />
				</div>
				<div className={style.info}>
					<h5>Freedom to buy</h5>
					<span>And a search for $98</span>
				</div>
			</div>
			<div className={style.item}>
				<div className={style.icon}>
					<FaMoneyBillWave />
				</div>
				<div className={style.info}>
					<h5>Various payment methods</h5>
					<span>A search for $55</span>
				</div>
			</div>
			<div className={style.item}>
				<div className={style.icon}>
					<RiUserLocationLine />
				</div>
				<div className={style.info}>
					<h5>Online service</h5>
					<span>Brad for ipsum</span>
				</div>
			</div>
			<div className={style.item}>
				<div className={style.icon}>
					<MdSecurity />
				</div>
				<div className={style.info}>
					<h5>Safe buy</h5>
					<span>Lorem for sifuosu</span>
				</div>
			</div>
		</div>
	);
};

export default Benefits;
