import React, { Fragment, Component } from 'react';

import InteractiveParticles from '../../js/InterativeParticles/InteractiveParticles';

class ImageCol extends Component {
  render() {
    return (
      <Fragment>
        <div className='flex-container'>
          {/* <img
            className='next-particle img-fluid d-none'
            data-renderer='webgl'
            data-particle-size='1'
            alt=''
            src={this.props.ImageURL}
          /> */}
          <InteractiveParticles
            image={this.props.ImageURL}
            width='1000'
            height='700'
          />
        </div>
      </Fragment>
    );
  }
}

export default ImageCol;
