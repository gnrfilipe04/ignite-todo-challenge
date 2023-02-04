import { TodoProvider } from './src/context/TodoContext';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <TodoProvider>
      <Home />
    </TodoProvider>
  );
}

