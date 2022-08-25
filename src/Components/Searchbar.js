import React from 'react';
import { AiOutlineDownCircle } from 'react-icons/ai';
const Searchbar = ({ onChange, value }) => {
	return (
		<div className='search-div'>
			<input
				className='search-input'
				type='text'
				onChange={onChange}
				value={value}
				placeholder='search with searchbar'
			/>
			<AiOutlineDownCircle size='1.5rem' color='#8934eb' />
		</div>
	);
};

export default Searchbar;
