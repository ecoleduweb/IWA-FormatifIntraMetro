import '#style/Dashboard.scss';
import LineColorEnum from '#types/LineColorEnum';

interface PropsInterface {
  color: LineColorEnum;
}

const TheLineColor = ({ color }: PropsInterface) => {
  const getLineDirectionByColor = (): string => {
    switch (color) {
      case LineColorEnum.Orange:
        return 'Direction Côte-Vertu';
      case LineColorEnum.Vert:
        return 'Direction Angrignon';
      case LineColorEnum.Bleu:
        return 'Direction Snowdon';
      case LineColorEnum.Jaune:
        return 'Direction Longueuil';
    }
    return color;
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width={100}
        height={100}
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          fill={color}
          stroke="black"
          strokeWidth="2"
        />
      </svg>
      <p className="info-line">{getLineDirectionByColor()}</p>
    </div>
  );
};

export default TheLineColor;
