import React, { useState } from 'react';
import FilterBar from '../Components/FilterBar';
import PropertyCard from '../Components/PropertyCard';
import Searchbar from '../Components/Searchbar';
import data from './../Data.json';
import { ReactComponent as EmptyState } from '../Assets/svgs/come-back-later.svg';

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

	const handleFilter = (filterData) => {
		let updatedData = [];
		if (filterData) {
			if (filterData.location) {
				updatedData = filteredData?.filter((x) =>
					x.location.includes(filterData.location)
				);
			}
			if (filterData.type) {
				updatedData = filteredData?.filter((x) => x?.type >= filterData?.type);
			}
			if (filterData.availableFrom) {
				updatedData = filteredData?.filter(
					(x) => new Date(x?.availableFrom) - new Date() > 0
				);
			}
			if (filterData.price) {
				updatedData = filteredData?.filter(
					(x) => x?.category === filterData?.category
				);
			}
		}
		setFilteredData(updatedData);
	};

	return (
		<div className='container'>
			<div className='searchbox-container'>
				<div className='headtext'>Search Properties for rent</div>
				<div>
					<Searchbar value={searchValue} onChange={handleSearch} />
				</div>
			</div>
			<FilterBar applyFilter={handleFilter} filterData={filteredData} />
			<div className='property-container'>
				{filteredData?.length > 0 ? (
					filteredData.map((item) => {
						return <PropertyCard key={item.id} {...item} />;
					})
				) : (
					<div className='headtext'>No Property Found</div>
				)}
			</div>
		</div>
	);
};

export default Home;
