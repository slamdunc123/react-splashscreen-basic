import React, { Fragment } from 'react';

// css
import './Home.scss';

const Home = () => {
	return (
		// Home Component - start
		<Fragment>
			<h1>Home</h1>
			<section className='home-container'>
				<article className='home-article' id='home-article__one'>
					<div className='home-article__heading'>
						<h4>Home Article Heading 1</h4>
					</div>
					<div className='home-article__body'>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Temporibus est laborum molestiae! Sequi voluptas velit vitae ea
							possimus recusandae? Nemo reiciendis laudantium consequatur fuga,
							officiis facere qui dolorem quia earum?
						</p>
					</div>
				</article>
				<article className='home-article' id='home-article__two'>
					<div className='home-article__heading'>
						<h4>Home Article Heading 2</h4>
					</div>
					<div className='home-article__body'>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Temporibus est laborum molestiae! Sequi voluptas velit vitae ea
							possimus recusandae? Nemo reiciendis laudantium consequatur fuga,
							officiis facere qui dolorem quia earum?
						</p>
					</div>
					<div className='home-article__body'>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Temporibus est laborum molestiae! Sequi voluptas velit vitae ea
							possimus recusandae? Nemo reiciendis laudantium consequatur fuga,
							officiis facere qui dolorem quia earum?
						</p>
					</div>
				</article>
			</section>
			<section className='home-container'>
				<article className='home-article' id='home-article__three'>
					<div className='home-article__heading'>
						<h4>Home Article Heading 3</h4>
					</div>
					<div className='home-article__body'>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Temporibus est laborum molestiae! Sequi voluptas velit vitae ea
							possimus recusandae? Nemo reiciendis laudantium consequatur fuga,
							officiis facere qui dolorem quia earum?
						</p>
					</div>
				</article>
			</section>
			<section className='home-container'>
				<article className='home-article' id='home-article__four'>
					<div className='home-article__heading'>
						<h4>Home Article Heading 4</h4>
					</div>
					<div className='home-article__body'>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Temporibus est laborum molestiae! Sequi voluptas velit vitae ea
							possimus recusandae? Nemo reiciendis laudantium consequatur fuga,
							officiis facere qui dolorem quia earum?
						</p>
					</div>
				</article>
				<article className='home-article' id='home-article__five'>
					<div className='home-article__heading'>
						<h4>Home Article Heading 5</h4>
					</div>
					<div className='home-article__body'>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Temporibus est laborum molestiae! Sequi voluptas velit vitae ea
							possimus recusandae? Nemo reiciendis laudantium consequatur fuga,
							officiis facere qui dolorem quia earum?
						</p>
					</div>
				</article>
			</section>
		</Fragment>
		// Home Component - end
	);
};

export default Home;
