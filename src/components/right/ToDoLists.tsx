import { useSelector } from 'react-redux';
import { RootState } from '../../app/store.ts';
import List from './List.tsx';
import './ToDoLists.css';

const ToDoLists = () => {
  const lists = useSelector((state: RootState) => state.list.lists);
  return (
    <>
      <div className="container">
        {lists
          .filter(list => list.displayed)
          .map(list => (
            <List key={list.name} name={list.name} items={list.items}></List>
          ))}
      </div>
    </>
  );
};
export default ToDoLists;
