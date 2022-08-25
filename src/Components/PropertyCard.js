import React from 'react';

const PropertyCard = ({
	index,
	name,
	image,
	price,
	location,
	beds,
	baths,
	area,
}) => {
	return (
		<div className='property-card ' key={index}>
			<div>
				<img className='img-cover' src={image} alt='' />
			</div>
			<div className='price-container'>
				<span>{price}/month</span>
				<button>
					<i className='fa fa-heart'></i>
				</button>
			</div>
			<div className='location-container'>
				<p>{name}</p>
				<p>{location}</p>
			</div>
			<div>
				<span>
					{area}/m<sup>2</sup>
				</span>
				<span>{beds}</span>
				<span>{baths}</span>
			</div>
		</div>
	);
};

export default PropertyCard;
