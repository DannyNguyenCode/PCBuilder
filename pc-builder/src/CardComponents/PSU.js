import React, { useState, useEffect, useCallback } from 'react';
import Card from '../Card';

function PSU({ parentCallback }) {
  const [option, setOptions] = useState(null);
  const handleCallBack = useCallback(
    (data, name, price) => {
      parentCallback(data, 'psu', name, price);
      data.preventDefault();
    },
    [parentCallback]
  );
  const url = 'https://floating-brushlands-50137.herokuapp.com/psus';
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOptions(data));
  }, [url]);

  return (
    <Card
      header='Power Supply Unit'
      data={option}
      componentCallBack={handleCallBack}
    />
  );
}

export default PSU;
