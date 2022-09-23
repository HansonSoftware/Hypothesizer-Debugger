import React from 'react';
import './Recorder.css';
import { sendCommand } from '../frontendConnectors';

type RecordState = 'ideal' | 'record' | 'collect';

const Recorder: React.FC = (): React.ReactElement => {
  const [recordState, setRecordingState] = React.useState<RecordState>('ideal');

  const recorder = async (newRecordState: RecordState): Promise<void> => {
    if (newRecordState === 'record') {
      setRecordingState(newRecordState);
      sendCommand('record');
    } else if (newRecordState === 'collect') {
      setRecordingState(newRecordState);
      sendCommand('stopRecording');
    }
  };

  const getButton = (): JSX.Element => {
    switch (recordState) {
      case 'ideal':
        return (
          <button onClick={() => recorder('record')} type="button">
            Record
          </button>
        );
      case 'record':
        return (
          <button
            onClick={() => recorder('collect')}
            id="recording"
            type="button"
          >
            ||
          </button>
        );
      case 'collect':
        return <button type="button">Collecting</button>;
      default:
        return <></>;
    }
  };

  return <div className="record">{getButton()}</div>;
};

export default Recorder;
