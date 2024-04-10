import { FunctionComponent, ReactNode, useEffect, useState } from 'react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Style
import style from './style.module.scss';

// Icons
import { SiInstagram } from 'react-icons/si';

// Data
import clothesData from '../../assets/data/clothes';

// Components
import Benefits from '../benefits';

const Highlights: FunctionComponent = (): ReactNode => {
	const [currentSlidesPerView, setCurrentSlidePerView] = useState(6);

	useEffect(() => {
		const handleSize = () => {
			if (window.innerWidth < 420) {
				setCurrentSlidePerView(1);
			} else if (window.innerWidth < 600) {
				setCurrentSlidePerView(2);
			} else if (window.innerWidth < 980) {
				setCurrentSlidePerView(3);
			} else if (window.innerWidth < 1200) {
				setCurrentSlidePerView(4);
			} else if (window.innerWidth < 1410) {
				setCurrentSlidePerView(5);
			} else {
				setCurrentSlidePerView(6);
			}
		};

		handleSize();

		window.addEventListener('resize', handleSize);

		return () => {
			window.removeEventListener('resize', handleSize);
		};
	}, []);

	return (
		<div className={style.highlights}>
			<div className='wrapper'>
				<Benefits />
			</div>
			<div className={style.clothes}>
				<Swiper
					modules={[Pagination, A11y, Autoplay]}
					slidesPerView={currentSlidesPerView}
					pagination={{ clickable: true }}
					loop={true}
					autoplay={{ delay: 3000 }}
				>
					{clothesData.map((clothe) => (
						<SwiperSlide key={clothe.id}>
							<div className={style.clothe}>
								<img src={clothe.img} alt={clothe.id.toString()} />
								<div className={style.access}>
									<SiInstagram />
									<a href='#'>@ fashion_store</a>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Highlights;
