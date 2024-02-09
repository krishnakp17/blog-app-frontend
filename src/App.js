import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import PostAdd from './components/PostAdd';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/add' element={<PostAdd/>}/>

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
