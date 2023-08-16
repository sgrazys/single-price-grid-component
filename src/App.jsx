import '../src/sass/App.scss';
import Button from './Components/Button';
import Card from './Components/Card';
import Cta from './Components/Cta';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Usp from './Components/Usp';

function App() {
	return (
		<>
			<main className='app-container'>
				<Card>
					<Header />
					<Cta>
						<Button />
					</Cta>
					<Usp />
				</Card>
			</main>
			<Footer />
		</>
	);
}

export default App;
