import '#style/Dashboard.scss';
import CrowdVolume from '#types/CrowdVolumeEnum';
import ASpecificTrain from '#components/ASpecificTrain';
const colors = ['orange', 'vert', 'bleu', 'jaune'];

const TheDate = () => {
  const date = new Date();
  return (
    <div>
      <p>
        Il est {date.getHours()}:{date.getMinutes()}
      </p>
      <p>Le {date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
    </div>
  );
};

export default TheDate;
