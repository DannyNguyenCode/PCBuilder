import React, { useState, useEffect, useCallback } from 'react';
import Card from '../Card';

function Case({ parentCallback }) {
  const [option, setOptions] = useState(null);
  const handleCallBack = useCallback(
    (data, price) => {
      parentCallback(data, 'case', price);
      data.preventDefault();
    },
    [parentCallback]
  );
  const url = 'https://floating-brushlands-50137.herokuapp.com/cases';

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOptions(data));
  }, [url]);

  return (
    <Card header='Case' data={option} componentCallBack={handleCallBack} />
  );
}

export default Case;
