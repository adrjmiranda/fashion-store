import { FunctionComponent, ReactNode } from 'react';

// Style
import style from './style.module.scss';

// Images
import LogoDiscover from '../../assets/img/logo-discover.png';
import LogoMasterCard from '../../assets/img/logo-martercard.png';
import LogoPaypal from '../../assets/img/logo-paypal.png';
import LogoVisa from '../../assets/img/logo-visa.png';

// Icons
import { FaFacebookF } from 'react-icons/fa6';
import { BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';
import { TfiPinterestAlt } from 'react-icons/tfi';
import { IoHeartSharp } from 'react-icons/io5';

// Components
import Logo from '../logo';

const Footer: FunctionComponent = (): ReactNode => {
	return (
		<footer className={style.footer}>
			<div className='wrapper'>
				<div className={style.content}>
					<div className={style.col}>
						<Logo />
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
							corrupti omnis sed reiciendis repellendus nulla nemo molestiae
							consectetur, magni a dignissimos quasi perspiciatis, ipsa et.
							Ipsam sunt consectetur vel accusantium!
						</p>
						<div className={style.payments}>
							<img src={LogoDiscover} alt='Payment' />
							<img src={LogoMasterCard} alt='Payment' />
							<img src={LogoPaypal} alt='Payment' />
							<img src={LogoVisa} alt='Payment' />
						</div>
					</div>
					<div className={style.col}>
						<h6>Features</h6>
						<ul>
							<li>
								<a href='#'>About</a>
							</li>
							<li>
								<a href='#'>Blog</a>
							</li>
							<li>
								<a href='#'>Contact</a>
							</li>
							<li>
								<a href='#'>FAQ</a>
							</li>
						</ul>
					</div>
					<div className={style.col}>
						<h6>Contact us</h6>
						<form action='#'>
							<input type='email' name='email' placeholder='Your email' />
							<button type='submit' className='btn'>
								Subscribe
							</button>
						</form>
						<div className={style.social_media}>
							<a href='#'>
								<FaFacebookF />
							</a>
							<a href='#'>
								<BsTwitter />
							</a>
							<a href='#'>
								<AiFillInstagram />
							</a>
							<a href='#'>
								<FaYoutube />
							</a>
							<a href='#'>
								<TfiPinterestAlt />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className='wrapper'>
				<div className={style.footer_bottom}>
					<p>
						Made with <IoHeartSharp /> by <span>Adriano Miranda</span> &copy;
						2024
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
