import { ThemeProvider } from './context/ThemeProvider';
import Navbar from './components/Navbar';
import Board from './pages/Board';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <Board />
      </div>
    </ThemeProvider>
  );
}

export default App;
