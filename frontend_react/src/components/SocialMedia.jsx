import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
	<div className="app__social">
		<div>
			<BsTwitter />
		</div>
		<div>
			<FaGithub />
		</div>
		<div>
			<BsInstagram />
		</div>
	</div>
);

export default SocialMedia;
