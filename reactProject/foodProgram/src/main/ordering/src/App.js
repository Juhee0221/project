import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './memberComponent/Login';
import MemberJoin from './memberComponent/MemberJoin';
import SuccessJoin from './memberComponent/SuccessJoin';

function App() {
  const navigator = useNavigate();
  return (
    <>
      <div className="App">
        <Header></Header>
      </div>

      <div>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/memberJoin' element={<MemberJoin/>}></Route>
          <Route path='/successJoin' element={<SuccessJoin/>}></Route>
        </Routes>
      </div>
    </>
    
  );
}

export default App;
