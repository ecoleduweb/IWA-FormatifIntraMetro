import '#style/UserUI.scss';
import TheDate from '#components/TheDate';
import ACrowdVolume from '#components/ACrowdVolume';
import TheLineColor from './TheLineColor';
import CrowdVolumeEnum from '#types/CrowdVolumeEnum';
import Train from '#types/Train';
import LineColorEnum from '#types/LineColorEnum';

interface PropsInterface {
  nextTrain: Train;
  incomingTrain: Train;
  lineColor: LineColorEnum;
}

const TheUserUI = ({ nextTrain, incomingTrain, lineColor }: PropsInterface) => {
  return (
    <div className="flex-between user-ui">
      <TheDate />
      <TheLineColor color={lineColor} />
      <div className="flex-between">
        <div>
          <ACrowdVolume crowdVolume={nextTrain.crowdVolume} />
          <p className="info-line">{incomingTrain.minutesBeforeTrain} mins</p>
        </div>
        <div>
          <ACrowdVolume crowdVolume={incomingTrain.crowdVolume} />
          <p className="info-line">{nextTrain.minutesBeforeTrain} mins</p>
        </div>
      </div>
    </div>
  );
};

export default TheUserUI;
