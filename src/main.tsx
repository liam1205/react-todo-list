import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './app/store.ts';
import { Provider } from 'react-redux';

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
