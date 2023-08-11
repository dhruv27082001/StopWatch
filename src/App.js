import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pausedTimeRef = useRef(0);

  useEffect(() => {
    return () => clearInterval(id.current);
  }, []);

  let id = useRef();

  const handleTime = () => {
    if (isPaused) {
      setIsPaused(false);
      id.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      id.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  };

  const handlePause = () => {
    setIsPaused(true);
    clearInterval(id.current);
    pausedTimeRef.current = time;
  };

  const handleReset = () => {
    setIsPaused(false);
    clearInterval(id.current);
    setTime(0);
    pausedTimeRef.current = 0;
  };

  const handleIncrement = () => {
    setTime((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setTime((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className='App'>
      <div className='timer-container'>
        <h1 className='timer'>{formatTime(isPaused ? pausedTimeRef.current : time)}</h1>
        <div className='button-container'>
          {!isPaused ? (
            <button className='button' onClick={handleTime}>Start</button>
          ) : (
            <button className='button' onClick={handleTime}>Resume</button>
          )}
          <button className='button reset-button' onClick={handleReset}>Reset</button>
          <button className='button pause-button' onClick={handlePause}>Pause</button>
          <button className='button increment-button' onClick={handleIncrement}>+1s</button>
          <button className='button decrement-button' onClick={handleDecrement}>-1s</button>
        </div>
      </div>
    </div>
  );
}

export default App;
