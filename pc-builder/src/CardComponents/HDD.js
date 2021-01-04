import React, { useState, useEffect, useCallback } from 'react';
import Card from '../Card';

function HDD({ parentCallback }) {
  const [option, setOptions] = useState(null);
  const handleCallBack = useCallback(
    (data, name, price) => {
      parentCallback(data, 'hdd', name, price);
      data.preventDefault();
    },
    [parentCallback]
  );
  const url = 'https://floating-brushlands-50137.herokuapp.com/harddiskdrives';
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOptions(data));
  }, [url]);

  return (
    <Card
      header='Hard Disk Drive'
      data={option}
      componentCallBack={handleCallBack}
    />
  );
}

export default HDD;
