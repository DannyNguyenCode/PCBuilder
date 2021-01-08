import React, { useState, useEffect, useCallback } from 'react';
import Card from './Card';

function Components({ parentCallback, component, url, header }) {
  const [option, setOptions] = useState(null);
  const [error, setError] = useState(null);
  const handleCallBack = useCallback(
    (data, name, price) => {
      parentCallback(data, component, name, price);
      data.preventDefault();
    },
    [parentCallback, component]
  );
  useEffect(() => {
    fetch(url)
      .then(async (res) => {
        if (res.ok) {
          setOptions(await res.json());
          setError(null);
        } else {
          setError(await res.text());
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [url]);
  return (
    <React.Fragment>
      {error !== null ? (
        <p>There was an errror fetching data for {header}</p>
      ) : (
        <Card
          header={header}
          data={option}
          componentCallBack={handleCallBack}
        />
      )}
    </React.Fragment>
  );
}

export default Components;
