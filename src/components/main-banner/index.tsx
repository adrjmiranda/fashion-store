import { FunctionComponent, ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Style
import style from './style.module.scss';

// Data
import mainSlidesData from '../../assets/data/main-slides';

const MainBanner: FunctionComponent = (): ReactNode => {
	return (
		<div className={style.main_banner}>
			<Swiper
				modules={[Pagination, A11y, Autoplay, EffectFade]}
				slidesPerView={1}
				pagination={{ clickable: true }}
				autoplay={{ delay: 3000 }}
				effect='fade'
				onSlideChange={(swiper) => console.log(swiper)}
			>
				{mainSlidesData.length > 0 &&
					mainSlidesData.map((item) => (
						<SwiperSlide key={item.id} className={style.slide}>
							<div
								style={{ backgroundImage: 'url(' + item.image + ')' }}
								className={style.content}
							>
								<div className='wrapper'>
									<div className={style.info}>
										<h2>{item.title}</h2>
										<p>{item.description}</p>
										<a href='#' className='btn'>
											Shop now
										</a>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
};

export default MainBanner;
