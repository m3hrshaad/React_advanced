import React, { useState } from 'react';

const UseStateBasics = () => {
  const value = useState(1)[0]
  const handler = useState(1)[0]
  console.log(value, handler);
  return <h2>useState basic example</h2>;
};

export default UseStateBasics;
