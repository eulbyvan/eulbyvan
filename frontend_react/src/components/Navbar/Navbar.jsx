import React, { useState, useEffect, useCallback } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

import { debounce } from '../../utilities/helper.js';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	const handleScroll = debounce(
		useCallback(() => {
			const currentScrollPos = window.pageYOffset;

			setVisible(
				(prevScrollPos > currentScrollPos &&
					prevScrollPos - currentScrollPos > 70) ||
					currentScrollPos < 10
			);

			setPrevScrollPos(currentScrollPos);
		}, [prevScrollPos]),
		// timer set to 100 milliseconds:
		100
	);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, [prevScrollPos, visible, handleScroll]);

	return (
		<nav
			className="app__navbar"
			style={{ transition: 'top 0.6s', top: visible ? '0' : '-60px' }}
		>
			<div className="app__navbar-logo">
				<a href="https://eulbyvan.com">
					<img src={images.logo} alt="logo" />
				</a>
			</div>
			<ul className="app__navbar-links">
				{['home', 'about', 'work', 'skills', 'contact'].map((item) => (
					<li className="app__flex p-text" key={`link-${item}`}>
						<div />
						<a href={`#${item}`}>{item}</a>
					</li>
				))}
			</ul>

			<div className="app__navbar-menu">
				<HiMenuAlt4 onClick={() => setToggle(true)} />

				{toggle && (
					<motion.div
						whileInView={{ x: [300, 0] }}
						transition={{ duration: 0.85, ease: 'easeOut' }}
					>
						<HiX onClick={() => setToggle(false)} />
						<ul>
							{['home', 'about', 'work', 'skills', 'contact'].map(
								(item) => (
									<li key={item}>
										<a
											href={`#${item}`}
											onClick={() => setToggle(false)}
										>
											{item}
										</a>
									</li>
								)
							)}
						</ul>
					</motion.div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
