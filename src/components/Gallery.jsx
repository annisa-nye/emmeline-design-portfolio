import React from 'react';
import Masonry from 'react-masonry-css';

// Import images from the correct folders
import aboutImage1 from '../assets/about/0-1.JPG';
import aboutImage2 from '../assets/about/0-2.JPG';
import workImage1 from '../assets/work/1-1.JPG';
import workImage2 from '../assets/work/1-2.JPG';
import workImage3 from '../assets/work/2-1.JPG';
import workImage4 from '../assets/work/2-2.JPG';
import workImage5 from '../assets/work/3-1.JPG';

const images = [
	{ src: aboutImage2, id: 'aboutImage2' }, // 0-2.jpg
	{ src: workImage3, id: 'workImage3' }, // 2-1.jpg
	{ src: aboutImage1, id: 'aboutImage1' }, // 0-1.jpg
	{ src: workImage2, id: 'workImage2' }, // 1-2.jpg
	{ src: workImage1, id: 'workImage1' }, // 1-1.jpg
	{ src: workImage4, id: 'workImage4' }, // 2-2.jpg
	{ src: workImage5, id: 'workImage5' }, // 3-1.jpg
];

const breakpointColumnsObj = {
	default: 4, // 4 columns for default screen size
	1100: 3, // 3 columns for widths less than 1100px
	700: 2, // 2 columns for widths less than 700px
	500: 1, // 1 column for widths less than 500px
};

const Gallery = () => {
	return (
		<div className='max-w-screen-lg mx-auto mt-24 mb-2 px-0'>
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className='my-masonry-grid'
				columnClassName='my-masonry-grid_column'
			>
				{images.map((image, index) => (
					<div key={index} className='gallery-item'>
						<img
							src={image.src}
							alt={`Portfolio image ${index + 1}`}
							className='w-full h-auto object-contain rounded-lg'
						/>
					</div>
				))}
			</Masonry>
		</div>
	);
};

export default Gallery;
