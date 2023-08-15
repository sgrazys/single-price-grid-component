import './App.scss';

function App() {
	return (
		<div className='card'>
			<div className='card--header'>
				<h1 className='card--header-title'>Join our community</h1>
				<div className='card--header-content'>
					<h2 className='card--subheading'>
						30-day, hassle-free money back guarantee
					</h2>
					<p className='card--header-description'>
						Gain access to our full library of tutorials along with
						expert code reviews. Perfect for any developers who are
						serious about honing their skills.
					</p>
				</div>
			</div>
			<div className='cta'>
				<h2 className='cta--header'>Monthly Subscription</h2>
				<div className='cta--pricing'>
					<p className='cta--price'>
						&dollar;29 <span>per month</span>
					</p>
				</div>
				<p className='cta--description'>
					Full access for less than &dollar;1 a day
				</p>
				<button className='cta--btn'>Sign up</button>
			</div>
			<div className='usp'>
				<h2 className='usp--header'>Why us</h2>
				<p className='usp--description'>
					Tutorials by industry experts Peer &amp; expert code review
					Coding exercises Access to our GitHub repos Community forum
					Flashcard decks New videos every week
				</p>
			</div>
			<footer className='footer'>
				<p class='attribution'>
					Challenge by{' '}
					<a
						href='https://www.frontendmentor.io?ref=challenge'
						target='_blank'
						rel='noreferrer'
					>
						Frontend Mentor
					</a>
				</p>
				<p>
					Coded by{' '}
					<a href='https://www.frontendmentor.io/profile/sgrazys'>
						Saulius Grazys
					</a>
				</p>
			</footer>
		</div>
	);
}

export default App;
