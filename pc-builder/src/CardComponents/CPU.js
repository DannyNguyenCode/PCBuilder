import React, { useState, useEffect, useCallback } from 'react';
import Card from '../Card';

function CPU({ parentCallback }) {
  const [option, setOptions] = useState(null);
  const handleCallBack = useCallback(
    (data, price) => {
      parentCallback(data, 'cpu', price);
      data.preventDefault();
    },
    [parentCallback]
  );

  const url = 'https://floating-brushlands-50137.herokuapp.com/amdprocessors';
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOptions(data));
  }, [url]);

  return (
    <Card
      header='Central Processing Unit'
      data={option}
      componentCallBack={handleCallBack}
    />
  );
}

export default CPU;
