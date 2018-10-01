import React from 'react';
import spiner from '../../img/spinner.gif';

const Spiner = (props) => {
  return (
      <div>
          <img
              src={spiner}
              alt={'Loading...'}
              style={{
                  width: '200px',
                  margin: 'auto',
                  display: 'block'
              }}
          />
      </div>
  )
};

export default Spiner;