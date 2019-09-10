import React, { Fragment } from 'react';

export default function ImageCol(props) {
	return (
		<Fragment>
			<div className='flex-container'>
				<img
					class='next-particle img-fluid d-none'
					alt=''
					src={props.ImageURL}
				/>
			</div>
		</Fragment>
	);
}
