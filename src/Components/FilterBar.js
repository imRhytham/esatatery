import React from 'react';

const FilterBar = () => {
	return (
		<div className='filter-container'>
			<div className='dropdown-div'>
				<label htmlFor='location'>Location</label>
				<select name='location' id='location' className='custom-select'>
					<option value='all'>all</option>
					<option value='lagos'>lagos</option>
					<option value='abuja'>abuja</option>
					<option value='kano'>kano</option>
				</select>
			</div>
			<div className='verticle-line' />
			<div className='dropdown-div'>
				<label htmlFor='location'>When</label>
				<select name='location' id='location' className='custom-select'>
					<option value='all'>all</option>
					<option value='lagos'>lagos</option>
					<option value='abuja'>abuja</option>
					<option value='kano'>kano</option>
				</select>
			</div>
			<div className='verticle-line' />
			<div className='dropdown-div'>
				<label htmlFor='location'>Price</label>
				<select name='location' id='location' className='custom-select'>
					<option value='all'>all</option>
					<option value='lagos'>lagos</option>
					<option value='abuja'>abuja</option>
					<option value='kano'>kano</option>
				</select>
			</div>
			<div className='verticle-line' />

			<div className='dropdown-div'>
				<label htmlFor='location'>Property Type</label>
				<select name='location' id='location' className='custom-select'>
					<option value='all'>all</option>
					<option value='lagos'>lagos</option>
					<option value='abuja'>abuja</option>
					<option value='kano'>kano</option>
				</select>
			</div>
			<div className='verticle-line' />

			<div>
				<button>search</button>
			</div>
		</div>
	);
};

export default FilterBar;
