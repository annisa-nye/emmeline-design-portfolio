import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
	return (
		<header className='fixed top-0 left-0 z-50 w-full bg-white'>
			<div className='max-w-screen-lg mx-auto flex justify-between items-center py-4 px-6 mb-2'>
				{/* Left: Title */}
				<div className='text-left'>
					<h1 className='text-4xl font-fascinate text-gray-800'>*emmeline</h1>
				</div>

				{/* Right: Navigation */}
				<nav className='text-lg'>
					<ul className='flex space-x-6'>
						<li>
							<Link
								to='work'
								smooth={true}
								className='cursor-pointer hover:underline'
							>
								Work
							</Link>
						</li>
						<li>
							<Link
								to='about'
								smooth={true}
								className='cursor-pointer hover:underline'
							>
								About
							</Link>
						</li>
						<li>
							<Link
								to='contact'
								smooth={true}
								className='cursor-pointer hover:underline'
							>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
