import './App.scss';
import { FavProvider } from './context/favProvider';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    <FavProvider>
      <AppRoutes />
    </FavProvider>
  );
}

export default App;
