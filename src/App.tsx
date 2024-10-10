import { Outlet } from 'react-router-dom';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className="mx-auto w-full max-w-screen-2xl px-8">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
