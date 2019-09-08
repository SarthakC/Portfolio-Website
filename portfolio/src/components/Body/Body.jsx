import React from 'react';
import ImageCol from './ImageCol';
import TextCol from './TextCol';
import '../css/styles.css';

const data = require('../../DATA/data.json');

export default function Body() {
  const renderBody = data => {
    return data.map((post, index) => (
      <div className='row flex-fill bg-dark vh-100' key={index}>
        <div className='col d-flex'>
          <ImageCol ImageURL={post.imageURL} />
        </div>
        <div className='col d-flex'>
          <TextCol text={post.text}></TextCol>
        </div>
      </div>
    ));
  };

  return <div className='container'>{renderBody(data)}</div>;
}
