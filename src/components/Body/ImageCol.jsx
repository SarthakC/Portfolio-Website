import React, { Fragment, Component } from 'react';

class ImageCol extends Component {
	render() {
		return (
			<Fragment>
				<div className='flex-container'>
					<img
						className='next-particle img-fluid d-none'
						alt=''
						src={this.props.ImageURL}
					/>
				</div>
			</Fragment>
		);
	}
}

export default ImageCol;
