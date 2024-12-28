import React, { useRef, useState } from 'react';
import { addItem, removeItem } from '../../app/listSlice.ts';
import './List.css';
import { useDispatch } from 'react-redux';
import icon from '../../assets/plus-blue.svg';

interface ListProps {
  name: string;
  items: string[];
}

const List: React.FC<ListProps> = ({ name, items }) => {
  const dispatch = useDispatch();
  const [inputVisible, setInputVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleButtonClick = () => {
    setInputVisible(!inputVisible);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };
  const [input, setInput] = useState('');
  const handleInputEnter = (event: React.FormEvent<HTMLFormElement>, item: string) => {
    event.preventDefault();
    if (item !== '' || item.trim().length === 0) {
      setInputVisible(false);
      dispatch(addItem({ listName: name, item: item }));
      setInput('');
    }
  };
  const handleCheckBoxClick = (index: number) => {
    setInputVisible(false);
    dispatch(removeItem({ listName: name, itemIndex: index }));
  };
  const handleInputLeave = () => {
    setInputVisible(false);
  };
  return (
    <>
      <div className="list-group">
        <p className="list-name">{name}</p>
        <div className="list-container">
          {!inputVisible && (
            <>
              <button
                type="button"
                className="btn btn-outline-primary button"
                onClick={handleButtonClick}
              >
                <img src={icon} />
                &nbsp; Add Task
              </button>
            </>
          )}
          {inputVisible && (
            <>
              <form onSubmit={event => handleInputEnter(event, input)}>
                <input
                  type="text"
                  className="form-control input"
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="Task"
                  ref={inputRef}
                  onChange={e => setInput(e.target.value)}
                  onBlur={handleInputLeave}
                />
              </form>
            </>
          )}

          {items.map((item, index) => (
            <div className="lists-element" key={`${name}-${index}`}>
              <input
                className="input"
                type="checkbox"
                checked={false}
                onClick={() => handleCheckBoxClick(index)}
              />
              <p className="list-element">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default List;
