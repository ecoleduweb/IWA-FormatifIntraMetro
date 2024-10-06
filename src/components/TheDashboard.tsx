import '#style/Dashboard.scss';
import CrowdVolume from '#types/CrowdVolumeEnum';
import ASpecificTrain from '#components/ASpecificTrain';
import LineColorEnum from '#types/LineColorEnum';

interface PropsInterface {
  onColorChange: (c: LineColorEnum) => void;
  onNextTrainCrowdVolumeChange(v: CrowdVolume): void;
  onIncomingTrainTimeChange(v: number): void;
  onNextTrainTimeChange(v: number): void;
}

const TheDashboard = ({
  onColorChange,
  onIncomingTrainTimeChange,
  onNextTrainCrowdVolumeChange,
  onNextTrainTimeChange,
}: PropsInterface) => {
  return (
    <div className="dashboard">
      <h3>Sélectionnez la couleur de la ligne :</h3>
      <div className="flex-between">
        {Object.keys(LineColorEnum).map((color) => (
          <div key={color}>
            <label>
              <input
                type="radio"
                id={color}
                value={LineColorEnum[color as keyof typeof LineColorEnum]}
                name="lineColor"
                onChange={() => onColorChange(LineColorEnum[color as keyof typeof LineColorEnum])}
              />
              {color}
            </label>
          </div>
        ))}
      </div>

      <div className="flex-between">
        <ASpecificTrain
          title={'Train à venir'}
          onTimeChange={(t) => onIncomingTrainTimeChange(t)}
        />
        <ASpecificTrain
          title={'Train suivant'}
          onTimeChange={(t) => onNextTrainTimeChange(t)}
        />
      </div>
    </div>
  );
};

export default TheDashboard;
