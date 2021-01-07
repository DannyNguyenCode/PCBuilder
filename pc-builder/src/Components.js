import React, { useState, useEffect, useCallback } from 'react';
import Card from './Card';

function Components({ parentCallback, component, ur, header }) {
  const [option, setOptions] = useState(null);
  const handleCallBack = useCallback(
    (data, name, price) => {
      parentCallback(data, component, name, price);
      data.preventDefault();
    },
    [parentCallback, component]
  );

  const url = ur;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOptions(data));
  }, [url]);

  return (
    <Card header={header} data={option} componentCallBack={handleCallBack} />
  );
}

export default Components;
