import { FunctionComponent, ReactNode } from 'react';

// Style
import './sass/base.scss';

// Components
import Header from './components/header';
import Offers from './components/offers';
import Promotion from './components/promotion';
import Highlights from './components/highlights';
import Footer from './components/footer';

const App: FunctionComponent = (): ReactNode => {
	return (
		<>
			<Header />
			<Offers />
			<Promotion />
			<Highlights />
			<Footer />
		</>
	);
};

export default App;
