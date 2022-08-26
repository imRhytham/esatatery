import React, { useState } from 'react';
import { cityList, PriceList, propertyTypeList } from '../raw';

const FilterBar = ({ filterData, applyFilter }) => {
	const [filteredData, setFilteredData] = useState(filterData);
	const handleChangeDropDown = (key, value) => {
		if (!key) return;
		setFilteredData({ ...filterData, [key]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (applyFilter) applyFilter(filteredData);
	};

	return (
		<div className='filter-container'>
			<div className='dropdown-div'>
				<label htmlFor='location'>Location</label>
				<select
					name='location'
					id='location'
					className='custom-select'
					value={filteredData.location}
					onChange={(e) => handleChangeDropDown('location', e.target.value)}
				>
					{cityList?.map((item) => {
						return (
							<option key={item.id} value={item.value}>
								{item.label}
							</option>
						);
					})}
				</select>
			</div>
			<div className='verticle-line' />
			<div className='dropdown-div'>
				<label htmlFor='location'>When</label>
				<input
					type='date'
					className='date-select'
					value={filteredData.availableFrom}
				/>
			</div>
			<div className='verticle-line' />
			<div className='dropdown-div'>
				<label htmlFor='price'>Price</label>
				<select
					name='price'
					id='price'
					className='custom-select'
					value={filteredData.price}
					onChange={(e) => handleChangeDropDown('price', e.target.value)}
				>
					{PriceList?.map((item) => {
						return (
							<option key={item.id} value={item.value}>
								{item.label}
							</option>
						);
					})}
				</select>
			</div>
			<div className='verticle-line' />

			<div className='dropdown-div'>
				<label htmlFor='type'>Property Type</label>
				<select
					name='type'
					id='type'
					className='custom-select'
					value={filteredData.type}
					onChange={(e) => handleChangeDropDown('type', e.target.value)}
				>
					{propertyTypeList?.map((item) => {
						return (
							<option key={item.id} value={item.value}>
								{item.label}
							</option>
						);
					})}
				</select>
			</div>
			<div className='verticle-line' />
			<div>
				<button onClick={handleSubmit}>Search</button>
			</div>
		</div>
	);
};

export default FilterBar;
