import React, { useState } from 'react';
import { addItem } from '../../app/listSlice.ts';
import './List.css';

interface ListProps {
  name: string;
  items: string[];
}

const List: React.FC<ListProps> = ({ name, items }) => {
  const [inputVisible, setInputVisible] = useState(false);
  const handleButtonClick = () => {
    setInputVisible(true);
  };
  const [input, setInput] = useState('');
  const handleInputEnter = (event: React.FormEvent<HTMLFormElement>, name: string) => {
    event.preventDefault();
    if (name !== '' || name.trim().length === 0) {
      setInputVisible(false);
      addItem(name);
      setInput('');
    }
  };
  return (
    <>
      <div className="list-group">
        <p className="list-name">{name}</p>
        <div className="list-container">
          <button
            type="button"
            className="btn btn-outline-primary button"
            onClick={handleButtonClick}
          >
            + Add Task
          </button>
          {inputVisible && (
            <>
              <form onSubmit={event => handleInputEnter(event, input)}>
                <input
                  type="text"
                  className="form-control input"
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="Task"
                  onChange={e => setInput(e.target.value)}
                />
              </form>
            </>
          )}

          {items.map((item, index) => (
            <>
              <div className="lists-element">
                <input className="input" type="checkbox" />
                <p className="list-element" key={index}>
                  {item}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
export default List;
