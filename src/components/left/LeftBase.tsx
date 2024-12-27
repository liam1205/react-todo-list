import AddButton from './button/AddButton.tsx';
import Lists from './Lists.tsx';
import './LeftBase.css';

const LeftBase = () => {
  return (
    <>
      <div className="upper">
        <AddButton></AddButton>
      </div>
      <div className="lower">
        <Lists></Lists>
      </div>
    </>
  );
};
export default LeftBase;
