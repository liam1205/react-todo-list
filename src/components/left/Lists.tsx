import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store.ts';
import './Lists.css';
import { updateListDisplayed } from '../../app/listSlice.ts';

const Lists = () => {
  const lists = useSelector((state: RootState) => state.list.lists);
  const dispatch = useDispatch();

  const handleCheckboxChange = (name: string) => {
    dispatch(updateListDisplayed(name));
  };
  return (
    <div>
      {lists.map(list => (
        <section className="list" key={list.name}>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
              checked={list.displayed}
              onChange={() => handleCheckboxChange(list.name)}
            />
          </div>
          <p>{list.name}</p>
        </section>
      ))}
    </div>
  );
};
export default Lists;
