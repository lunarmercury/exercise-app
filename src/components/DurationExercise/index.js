import React, { useState, useEffect, useRef } from 'react';

const DurationExercise = ({ name }) => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [running]);

  const formatTime = (sec) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h2>{name}</h2>
      <p style={{ fontSize: 24 }}>{formatTime(seconds)}</p>
      <button
        onClick={() => setRunning(true)}
        disabled={running}
        style={{
          marginRight: 10,
          padding: '10px 15px',
          borderRadius: 5,
          cursor: running ? 'not-allowed' : 'pointer',
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          setRunning(false);
          setSeconds(0);
        }}
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

export default DurationExercise;