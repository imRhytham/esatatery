import React from 'react';
import PropertyCard from '../Components/PropertyCard';
import Searchbar from '../Components/Searchbar';
import data from './../Data.json';
const Home = () => {
	console.log(data);
	return (
		<div className='container'>
			<div className='searchbox-container'>
				<div className='headtext'>Search Properties for rent</div>
				<div>
					<Searchbar />
				</div>
			</div>
			<div className='filter-container'>
				<div>filter</div>
			</div>
			<div className='property-container'>
				{data?.map((item, index) => {
					return <PropertyCard key={item.id} {...item} />;
				})}
			</div>
		</div>
	);
};

export default Home;
