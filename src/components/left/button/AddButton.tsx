import './AddButton.css';
import { useDispatch } from 'react-redux';
import { addList } from '../../../app/listSlice.ts';
import { useState } from 'react';

const AddButton = () => {
  const [listName, setListName] = useState('');

  const dispatch = useDispatch();

  const handleAddList = () => {
    if (listName.trim() !== '') {
      const newList = { name: listName, items: [] }; // Dynamically set the name
      dispatch(addList(newList)); // Dispatch the action
      setListName(''); // Clear the input field
    }
  };

  return (
    <div className="button">
      <input
        type="text"
        className="form-control"
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        value={listName}
        onChange={e => setListName(e.target.value)}
      />
      <button type="button" className="btn btn-outline-primary" onClick={() => handleAddList()}>
        + Add List
      </button>
    </div>
  );
};
export default AddButton;
