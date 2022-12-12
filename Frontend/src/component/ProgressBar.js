import ProgressBar from 'react-bootstrap/ProgressBar';

function ScreenreaderLabelExample({trace , queue}) {

const progress = (trace / queue.length) * 100;
  return <ProgressBar now={progress} label={`${progress}%`}  />;
}

export default ScreenreaderLabelExample;