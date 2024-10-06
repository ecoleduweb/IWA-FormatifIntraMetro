import '#style/SpecificTrain.scss';
import CrowdVolume from '#types/CrowdVolumeEnum';
import { on } from 'events';
import { useState } from 'react';

interface PropsInterface {
  onCrowdVolumeChange: (v: CrowdVolume) => void;
  onTimeChange: (v: number) => void;
  title: string;
}

const ASpecificTrain = ({ onCrowdVolumeChange, onTimeChange, title }: PropsInterface) => {
  const [peopleCount, setPeopleCount] = useState<number | null>();

  const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    // permet de ne pas afficher d'erreur dans la console si l'utilisateur efface le champ
    if (e.target.value === '') {
      setPeopleCount(null);
      return;
    }
    if (value < 0) {
      alert('Le nombre de personnes ne peut pas être négatif');
    } else if (value > 1000) {
      alert('Le nombre de personnes ne peut pas être supérieur à 1000');
    } else {
      setPeopleCount(value);
      if (value < 100) {
        onCrowdVolumeChange(CrowdVolume.Low);
      } else if (value < 500) {
        onCrowdVolumeChange(CrowdVolume.Medium);
      } else {
        onCrowdVolumeChange(CrowdVolume.High);
      }
    }
  };
  return (
    <div className="specific-train">
      <h3>{title}</h3>
      <label>Nombre de minutes avant le prochain train : </label>
      <div className="flex-between">
        <label>
          Nb de minutes
          <input
            type="number"
            min="0"
            onChange={(e) => onTimeChange(parseInt(e.target.value))}
          />
        </label>
      </div>
      <h3>Achalandage du wagon :</h3>
      <div>
        <label>
          <input
            type="number"
            value={peopleCount ?? ''}
            onChange={handlePeopleChange}
          />
        </label>
      </div>
    </div>
  );
};

export default ASpecificTrain;
