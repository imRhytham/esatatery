import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

const PropertyCard = ({
	id,
	name,
	image,
	price,
	location,
	beds,
	baths,
	area,
}) => {
	return (
		<div className='property-card ' key={id}>
			<div>
				<img className='img-cover' src={image} alt='' />
			</div>
			<div className='price-container'>
				<span>
					<span className='price-text'>{price}</span>/month
				</span>
				<div className='svg-div'>
					<AiOutlineHeart size='1.5rem' color='#8934eb' />
				</div>
			</div>
			<div className='location-container'>
				<p className='title-text'>{name}</p>
				<p>{location}</p>
			</div>
			<div className='hr-line' />
			<div className='property-info'>
				<div>
					<BiBed size='1.25rem' color='#8934eb' />
					<span> {beds} Beds</span>
				</div>
				<div>
					<BiBath size='1.25rem' color='#8934eb' />
					<span> {baths} Bathrooms</span>
				</div>
				<div>
					<BiArea size='1.25rem' color='#8934eb' />
					<span>
						{' '}
						m<sup>2</sup>
					</span>
				</div>
			</div>
		</div>
	);
};

export default PropertyCard;
