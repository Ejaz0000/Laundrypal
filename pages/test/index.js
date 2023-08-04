import React, { useState } from 'react';
import Child1 from './child1';
import Child2 from './child2';

const ParentComponent = () => {
  const [valueFromChild1, setValueFromChild1] = useState('');

  const handleValueChange = (newValue) => {
    setValueFromChild1(newValue);
  };

  return (
    <div>
      <Child1 onChange={handleValueChange} />
      <Child2 value={valueFromChild1} />
    </div>
  );
};

export default ParentComponent;
