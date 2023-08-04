import React from 'react';

const Child11 = ({ onChange }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Type something"
      />
    </div>
  );
};

export default Child11;
