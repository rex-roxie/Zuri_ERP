import './App.css';
import { Routes, Route } from 'react-router';
import Login from './components/Login';
import Home from './pages/Home';
import { AuthProvider } from './components/AuthChange';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route path={"/home"} element={<ProtectedRoute><Home /></ProtectedRoute>} />
        </Routes>
        <AuthProvider />
      </div>
  );
}

export default App;