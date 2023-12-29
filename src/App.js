import './App.css';
import { Routes, Route } from 'react-router';
import Login from './components/Login';
import Home from './pages/Home';
import { AuthProvider } from './components/AuthChange';
import ProtectedRoute from './components/ProtectedRoute';
import UpdateFirstName from './components/UpdateFirstName';
import UpdateEmail from './components/UpdateEmail';
import UpdatePassword from './components/UpdatePassword';
import AddDriver from './pages/AddDriver';
import DeleteDriver from './pages/DeleteDriver';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route path={"/home"} element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path={"/changeName"} element={<ProtectedRoute><UpdateFirstName /></ProtectedRoute>} />
          <Route path={"/changeEmail"} element={<ProtectedRoute><UpdateEmail /></ProtectedRoute>} />
          <Route path={"/changePassword"} element={<ProtectedRoute><UpdatePassword /></ProtectedRoute>} />
          <Route path={"/addDriver"} element={<ProtectedRoute><AddDriver /></ProtectedRoute>} />
          <Route path={"/deleteDriver"} element={<ProtectedRoute><DeleteDriver /></ProtectedRoute>} />
          {/* <Route path={`/drivers/${driver.first_name}`} element={<ProtectedRoute><DeleteDriver /></ProtectedRoute>} /> */}
        </Routes>
        <AuthProvider />
      </div>
  );
}

export default App;