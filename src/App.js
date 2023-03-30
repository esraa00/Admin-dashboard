import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import List from './pages/List/List';
import Single from './pages/Single/Single';
import New from './pages/New/New';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/products">
          <Route index element={<List />}></Route>
          <Route path=":productId" element={<Single />}></Route>
          <Route path="new" element={<New />}></Route>
        </Route>
        <Route path="/orders">
          <Route index element={<List />}></Route>
          <Route path=":orderId" element={<Single />}></Route>
          <Route path="new" element={<New />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
