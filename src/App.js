import ProgressLoader from './components/ProgressLoader/ProgressLoader';
import MultiProgressLoader from './components/MultiProgressLoader/MultiProgressLoader';
import './App.css';

const App = () => {
  return (
    <div className='spanProjectContainer'>
      <div className='progressLoaderContainer'>
        <div>Part 1:</div>
        <ProgressLoader />
      </div>
      <div className='multiProgressLoaderContainer'>
        <div>Part 2:</div>
        <MultiProgressLoader />
      </div>
    </div>
  );
}

export default App;
