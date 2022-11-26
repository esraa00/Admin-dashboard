import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import List from './pages/List/List';
import Single from './pages/Single/Single';
import New from './pages/New/New';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/users">
          <Route index element={<List />}></Route>
          <Route path=":userId" element={<Single />}></Route>
          <Route path="new" element={<New />}></Route>
        </Route>
        <Route path="/products">
          <Route index element={<List />}></Route>
          <Route path=":productId" element={<Single />}></Route>
          <Route path="new" element={<New />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
