import { FunctionComponent, ReactNode, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay, EffectCoverflow } from 'swiper/modules';
import { motion, useAnimation } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Style
import style from './style.module.scss';

// Data
import mainSlidesData from '../../assets/data/main-slides';

const MainBanner: FunctionComponent = (): ReactNode => {
	const controls = useAnimation();

	const [animationStarted, setAnimationStarted] = useState(false);

	const handleAnimationInfo = () => {
		if (animationStarted) {
			controls.start(
				{ y: [150, 0], opacity: [0, 1] },
				{ duration: 2, delay: 0 }
			);
		}
	};

	const handleSwiperInit = () => {
		setAnimationStarted(true);
	};

	return (
		<div className={style.main_banner}>
			<Swiper
				modules={[Pagination, A11y, Autoplay, EffectCoverflow]}
				slidesPerView={1}
				pagination={{ clickable: true }}
				autoplay={{ delay: 4000 }}
				effect='coverflow'
				onInit={handleSwiperInit}
				onSlideChange={() => handleAnimationInfo()}
				speed={1000}
				loop={true}
			>
				{mainSlidesData.length > 0 &&
					mainSlidesData.map((item, index) => (
						<SwiperSlide key={item.id} className={style.slide}>
							<div
								style={{ backgroundImage: 'url(' + item.image + ')' }}
								className={style.content}
							>
								<motion.div className='wrapper'>
									<motion.div
										animate={controls}
										className={style.info}
										style={{ marginLeft: index === 3 ? 'auto' : 0 }}
									>
										<h2>{item.title}</h2>
										<p>{item.description}</p>
										<a href='#' className='btn'>
											Shop now
										</a>
									</motion.div>
								</motion.div>
							</div>
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
};

export default MainBanner;
