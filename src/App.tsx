import { NavBar } from './components/NavBar';
import { Store } from './pages/Store/Store';

function App() {
  return (
    <div className="mx-auto w-full max-w-screen-2xl px-8">
      <NavBar />
      <Store />
    </div>
  );
}

export default App;
