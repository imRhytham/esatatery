import React from 'react';
import PropertyCard from '../Components/PropertyCard';

const Home = () => {
	return (
		<div className='container'>
			<div className='searchbox-container'>
				<div className='headtext'>Search Properties for rent</div>
				<div className='headtext'>Search</div>
			</div>
			<div className='filter-container'>
				<div>filter</div>
			</div>
			<div className='property-container'>
				<PropertyCard />
				<PropertyCard />
				<PropertyCard />
				<PropertyCard />
				<PropertyCard />
			</div>
		</div>
	);
};

export default Home;
