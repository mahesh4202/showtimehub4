import React from 'react';
import Barcode from 'react-barcode';

const Barcode1 = () => {
  return (
    <div>
      <Barcode 
        value="5382773942"
        width={2}
        height={100}
        fontSize={16}
      />
    </div>
  );
};

export default Barcode1;
