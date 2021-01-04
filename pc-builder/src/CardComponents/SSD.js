import React, { useState, useEffect, useCallback } from 'react';
import Card from '../Card';

function SSD({ parentCallback }) {
  const [option, setOptions] = useState(null);
  const handleCallBack = useCallback(
    (data, name, price) => {
      parentCallback(data, 'ssd', name, price);
      data.preventDefault();
    },
    [parentCallback]
  );
  const url = 'https://floating-brushlands-50137.herokuapp.com/nvmessds';
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOptions(data));
  }, [url]);

  return (
    <Card
      header='Solid State Drive'
      data={option}
      componentCallBack={handleCallBack}
    />
  );
}

export default SSD;
