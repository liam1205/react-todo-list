import './AddButton.css';
import { useDispatch } from 'react-redux';
import { addList } from '../../../app/listSlice.ts';
import { useRef, useState } from 'react';
import icon from '../../../assets/plus-blue.svg';

const AddButton = () => {
  const [listName, setListName] = useState('');
  const [inputVisible, setInputVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const handleAddList = () => {
    if (listName.trim() !== '') {
      const newList = { name: listName, items: [] }; // Dynamically set the name
      dispatch(addList(newList)); // Dispatch the action
      setListName(''); // Clear the input field
      setInputVisible(false);
    }
  };

  const handleButtonClick = () => {
    setInputVisible(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const handleInputLeave = () => {
    setInputVisible(false);
  };

  return (
    <div className="button">
      {!inputVisible && (
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => handleButtonClick()}
        >
          <img src={icon} />
          &nbsp; Add List
        </button>
      )}
      {inputVisible && (
        <>
          <form onSubmit={handleAddList}>
            <input
              type="text"
              className="form-control"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="List"
              ref={inputRef}
              value={listName}
              onChange={e => setListName(e.target.value)}
              onBlur={handleInputLeave}
            />
          </form>
        </>
      )}
    </div>
  );
};
export default AddButton;
