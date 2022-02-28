import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaGithub, FaTwitter } from 'react-icons/fa';

const SocialMedia = () => (
	<div className="app__social">
		<div>
			<a href="https://twitter.com/stwgrffn">
				<FaTwitter />
			</a>
		</div>
		<div>
			<a href="https://github.com/eulbyvan">
				<FaGithub />
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
