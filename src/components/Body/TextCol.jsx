import React, { Fragment } from 'react';

export default function TextCol(props) {
  return (
    <Fragment>
      <div className='flex-container'>
        <p className='text-light'>{props.text}</p>
      </div>
    </Fragment>
  );
}
