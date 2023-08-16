function Cta({ children }) {
	return (
		<div className='cta'>
			<h2 className='cta--header'>Monthly Subscription</h2>
			<div className='cta--pricing-container'>
				<p className='cta--price'>
					&#36;29 <span>per month</span>
				</p>
				<p className='cta--description'>
					Full access for less than &#36;1 a day
				</p>
				{children}
			</div>
		</div>
	);
}

export default Cta;
