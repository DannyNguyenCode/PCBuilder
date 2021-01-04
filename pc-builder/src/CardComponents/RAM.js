import React, { useState, useEffect, useCallback } from 'react';
import Card from '../Card';

function RAM({ parentCallback }) {
  const [option, setOptions] = useState(null);
  const handleCallBack = useCallback(
    (data, name, price) => {
      parentCallback(data, 'ram', name, price);
      data.preventDefault();
    },
    [parentCallback]
  );
  const url = 'https://floating-brushlands-50137.herokuapp.com/ddr4rams';
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOptions(data));
  }, [url]);

  return (
    <Card
      header='Random Access Memory'
      data={option}
      componentCallBack={handleCallBack}
    />
  );
}

export default RAM;
