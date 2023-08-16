import '../src/sass/App.scss';

function App() {
	return (
		<>
			<div className='card'>
				<div className='header'>
					<h1 className='header--heading'>Join our community</h1>
					<div className='header--content'>
						<h2 className='header--subheading'>
							30-day, hassle-free money back guarantee
						</h2>
						<p className='header--description'>
							Gain access to our full library of tutorials along
							with expert code reviews. Perfect for any developers
							who are serious about honing their skills.
						</p>
					</div>
				</div>
				<div className='cta'>
					<h2 className='cta--header'>Monthly Subscription</h2>
					<div className='cta--pricing-container'>
						<p className='cta--price'>
							&#36;29 <span>per month</span>
						</p>
						<p className='cta--description'>
							Full access for less than &#36;1 a day
						</p>
					</div>

					<button className='cta--btn'>Sign up</button>
				</div>
				<div className='usp'>
					<h2 className='usp--header'>Why us</h2>
					<ul className='usp--list'>
						<li className='usp--list-item'>
							Tutorials by industry experts
						</li>
						<li className='usp--list-item'>
							Peer &amp; expert code review
						</li>
						<li className='usp--list-item'>Coding exercises</li>
						<li className='usp--list-item'>
							Access to our GitHub repos
						</li>
						<li className='usp--list-item'>Community forum</li>
						<li className='usp--list-item'>Flashcard decks</li>
						<li className='usp--list-item'>
							New videos every week
						</li>
					</ul>
				</div>
			</div>
			<footer className='footer'>
				<p>
					Challenge by{' '}
					<a
						href='https://www.frontendmentor.io?ref=challenge'
						target='_blank'
						rel='noreferrer'
					>
						Frontend Mentor
					</a>
				</p>
				<p className='footer--attribution'>
					Coded by{' '}
					<a href='https://www.frontendmentor.io/profile/sgrazys'>
						Saulius Grazys
					</a>
				</p>
			</footer>
		</>
	);
}

export default App;
