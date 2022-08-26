import React, { useState } from 'react';
import FilterBar from '../Components/FilterBar';
import PropertyCard from '../Components/PropertyCard';
import Searchbar from '../Components/Searchbar';
import data from './../Data.json';
const Home = () => {
	const [filteredData, setFilteredData] = useState(data);
	const [searchValue, setSearchValue] = useState('');

	const handleSearch = (e) => {
		setSearchValue(e.target.value);
		const filtered = data.filter((item) => {
			return item.name.toLowerCase().includes(e.target.value.toLowerCase());
		});
		setFilteredData(filtered);
	};

	return (
		<div className='container'>
			<div className='searchbox-container'>
				<div className='headtext'>Search Properties for rent</div>
				<div>
					<Searchbar value={searchValue} onChange={handleSearch} />
				</div>
			</div>
			<FilterBar />
			<div className='property-container'>
				{filteredData?.map((item, index) => {
					return <PropertyCard key={item.id} {...item} />;
				})}
			</div>
		</div>
	);
};

export default Home;
