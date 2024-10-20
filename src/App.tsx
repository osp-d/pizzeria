import { Outlet } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <div className="mx-auto w-full max-w-screen-2xl px-8 pt-6">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
