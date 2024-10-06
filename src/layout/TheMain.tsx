import TheDashBoard from '#components/TheDashboard';
import TheUserUI from '#components/TheUserUI';
import CrowdVolumeEnum from '#types/CrowdVolumeEnum';
import LineColorEnum from '#types/LineColorEnum';
import Train from '#types/Train';
import { useState } from 'react';

const TheMain = () => {
  const [nextTrain, setNextTrain] = useState<Train>({
    crowdVolume: CrowdVolumeEnum.High,
    minutesBeforeTrain: 0,
  });

  const [incomingTraim, setIncomingTrain] = useState<Train>({
    crowdVolume: CrowdVolumeEnum.High,
    minutesBeforeTrain: 0,
  });

  const [lineColor, setLineColor] = useState(LineColorEnum.Orange);
  const handleIncomingTrainTimeChange = (n: number) => {
    setIncomingTrain({ ...nextTrain, minutesBeforeTrain: n });
  };

  const handleNextTrainTimeChange = (n: number) => {
    setNextTrain({ ...incomingTraim, minutesBeforeTrain: n });
  };

  const handleColorChange = (color: string) => {
    setLineColor(color);
  };

  return (
    <main className="wrapper">
      <TheUserUI
        nextTrain={nextTrain}
        incomingTrain={incomingTraim}
        lineColor={lineColor}
      />
      <TheDashBoard
        onIncomingTrainTimeChange={handleIncomingTrainTimeChange}
        onNextTrainTimeChange={handleNextTrainTimeChange}
        onColorChange={handleColorChange}
        // Add the other required props here
      />
    </main>
  );
};

export default TheMain;

