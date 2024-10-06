import '#style/SpecificTrain.scss';
import CrowdVolume from '#types/CrowdVolumeEnum';
import { on } from 'events';
import { useState } from 'react';

interface PropsInterface {
  onTimeChange: (v: number) => void;
  title: string;
}

const ASpecificTrain = ({ onTimeChange, title }: PropsInterface) => {
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
          <input type="number" />
        </label>
      </div>
    </div>
  );
};

export default ASpecificTrain;
