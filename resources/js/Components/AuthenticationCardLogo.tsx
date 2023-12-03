import { Link } from '@inertiajs/react';
import React from 'react';

export default function AuthenticationCardLogo() {
	return (
		<Link href="/">
			<img className="w-16 h-16" src="/storage/logo.png" />
		</Link>
	);
}
