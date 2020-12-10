import React, { useState, useEffect, useCallback } from 'react';
import Card from '../Card';

function Cooling({ parentCallback }) {
  const [option, setOptions] = useState(null);
  const handleCallBack = useCallback(
    (data, price) => {
      parentCallback(data, 'cooling', price);
      data.preventDefault();
    },
    [parentCallback]
  );
  const url =
    'https://floating-brushlands-50137.herokuapp.com/cpufansheatsinks';
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOptions(data));
  }, [url]);

  return (
    <Card header='Cooling' data={option} componentCallBack={handleCallBack} />
  );
}

export default Cooling;
