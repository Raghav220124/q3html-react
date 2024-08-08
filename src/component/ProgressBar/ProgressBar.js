import './progressbar.scss';
import './progress-bar-layout.scss';
import LinearProgress from './LinearProgress';
import CircularProgress from './CircularProgress';


function ProgressBar() {
  return (
    <>
      <h1>Progress Bar</h1>
      <LinearProgress/>
      <CircularProgress/>
    </>

  );
}

export default ProgressBar;
