import '#style/CrowdVolume.scss';
import DarkSilouhette from '#assets/DarkSilouhette.svg';
import LightSilouhette from '#assets/LightSilouhette.svg';
import CrowdVolume from '#types/CrowdVolumeEnum';
const colors = ['orange', 'vert', 'bleu', 'jaune'];

interface PropsInterface {
  crowdVolume: CrowdVolume;
}

const ACrowdVolume = ({ crowdVolume }: PropsInterface) => {
  return (
    <div className="crowd-volume">
      <img src={DarkSilouhette} />
      <img
        src={crowdVolume === CrowdVolume.High || crowdVolume === CrowdVolume.Medium ? DarkSilouhette : LightSilouhette}
      />
      <img src={crowdVolume === CrowdVolume.High ? DarkSilouhette : LightSilouhette} />
    </div>
  );
};

export default ACrowdVolume;
