import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import './MultiProgressLoader.css';

const MultiProgressLoader = () => {
  const [loaders, setLoaders] = useState([]);
  const [currentLoaderId, setCurrentLoaderId] = useState(0);

  const handleAddCount = () => {
    setLoaders([...loaders, {
      id: loaders.length,
      status: 'Not Started',
      progress: 0
    }])
  };

  useEffect(() => {
    if (currentLoaderId < loaders.length) {
      const currentLoader = loaders[currentLoaderId];
      if (currentLoader.status === 'Not Started') {
        currentLoader.status = 'In Progress';
        const interval = setInterval(() => { 
          currentLoader.progress += 25;
          if (currentLoader.progress === 100) {
            currentLoader.status = 'Completed';
            setCurrentLoaderId(currentLoaderId + 1);
            clearInterval(interval);
          }
        }, 500);
      }
    }
  }, [loaders, currentLoaderId]);

  return (
    <div>
      <Button variant="outlined" onClick={handleAddCount}>Add Count</Button>
      {loaders.map((loader, i) => {
        return (
          <LinearProgress className='loaderBar' key={i} variant="determinate" value={loader['progress']} />
        );
      })}
    </div>
  );
};

export default MultiProgressLoader;
