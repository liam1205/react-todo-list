import './Base.css';
import LeftBase from './left/LeftBase.tsx';
import RightBase from './right/RightBase.tsx';

const Base = () => {
  return (
    <div className="base-container">
      <div className="base-left">
        <LeftBase></LeftBase>
      </div>
      <div className="base-right">
        <RightBase></RightBase>
      </div>
    </div>
  );
};
export default Base;
