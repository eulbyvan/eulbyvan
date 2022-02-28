import React from 'react';
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';
// import { FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
	<div className="app__social">
		<div>
			<a href="https://twitter.com/stwgrffn">
				<BsTwitter />
			</a>
		</div>
		<div>
			<a href="https://github.com/eulbyvan">
				<BsGithub />
			</a>
		</div>
		<div>
			<a href="https://www.instagram.com/eulbyvan/">
				<BsInstagram />
			</a>
		</div>
	</div>
);

export default SocialMedia;
