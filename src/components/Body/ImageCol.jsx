import React, { Fragment, Component } from 'react';

import particalize from '../../js/paritcalize';

class ImageCol extends Component {
  componentDidMount() {
    particalize(this);
  }

  render() {
    return (
      <Fragment>
        <div className='flex-container'>
          <img
            className='next-particle img-fluid d-none'
            data-renderer='webgl'
            data-particle-size='1'
            alt=''
            src={this.props.ImageURL}
          />
        </div>
      </Fragment>
    );
  }
}

export default ImageCol;
