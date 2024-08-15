import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import './ProgressLoader.css';

const ProgressLoader = () => {
  const [progress, setProgress] = useState(0);
  const [startCount, setStartCount] = useState(false);

  const handleStartCount = () => {
    setProgress(0);
    setStartCount(true);
  };

  useEffect(() => {
    if (startCount && progress < 100) {
     setTimeout(() => {
        setProgress(progress + 25);
      }, 500);
    }
  }, [startCount, progress]);

  return (
    <div>
      <Button variant="outlined" onClick={handleStartCount}>Start Count</Button>
      <LinearProgress className='loaderBar' variant="determinate" value={progress} />
    </div>
  );
};

export default ProgressLoader;
