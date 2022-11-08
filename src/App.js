import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/Router';

function App() {
  return (
    <div data-theme="emerald">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
