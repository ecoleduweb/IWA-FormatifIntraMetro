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
      <img src={LightSilouhette} />
      <img src={LightSilouhette} />
      {/* Toutes les silouhettes sont noires quand crowdVolume est égal à {CrowdVolume.High}
      Deux silouhettes sont noires quand crowdVolume est égal à {CrowdVolume.Medium}
      Une silouhettes est noire quand crowdVolume est égal à {CrowdVolume.Low} */}
    </div>
  );
};

export default ACrowdVolume;
