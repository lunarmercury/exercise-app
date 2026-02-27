import React, { useState } from 'react';

const RepetitionExercise = ({ name }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{name}</h2>
      <p style={{ fontSize: 24 }}>{count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          marginRight: 10,
          padding: '10px 15px',
          borderRadius: 5,
          cursor: 'pointer',
        }}
      >
        Add Rep
      </button>
      <button
        onClick={() => setCount(0)}
        style={{
          padding: '10px 15px',
          borderRadius: 5,
          cursor: 'pointer',
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default RepetitionExercise;