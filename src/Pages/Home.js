import React from 'react';
import PropertyCard from '../Components/PropertyCard';
import data from './../Data.json';
const Home = () => {
	console.log(data);
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
				{data.map((item, index) => {
					return <PropertyCard key={index} {...item} />;
				})}
			</div>
		</div>
	);
};

export default Home;
