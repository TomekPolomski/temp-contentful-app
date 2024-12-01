import heroImg from './assets/hero.svg';

const Hero = () => {
	return (
		<section className='hero'>
			<div className='hero-center'>
				<div className='hero-title'>
					<h1>Contentful CMS</h1>
					<p>
						Normcore slow-carb ethical biodiesel lomo meditation. Lyft ennui gastropub palo santo jawn, banh mi
						waistcoat try-hard blue bottle vexillologist grailed. Big mood bodega boys bespoke letterpress, mlkshk
						tattooed solarpunk paleo bitters crucifix praxis sartorial celiac hammock disrupt.
					</p>
				</div>
				<div className='img-container'>
					<img src={heroImg} alt='woman and the browser' className='img' />
				</div>
			</div>
		</section>
	);
};
export default Hero;
