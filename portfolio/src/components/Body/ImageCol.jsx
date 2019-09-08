import React, { Fragment } from 'react';

export default function ImageCol(props) {
  return (
    <Fragment>
      <div className='flex-container'>
        <img src={props.ImageURL} alt='' className='img-fluid' />
      </div>
    </Fragment>
  );
}
