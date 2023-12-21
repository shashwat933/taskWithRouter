import { Route, Routes } from 'react-router-dom';
import './App.css';
import StudentDetail from './StudentDetail';
import { useState } from 'react';
import StudentHome from './StudentHome';
function App() {
  const [show, setShow] = useState(false);
  
  const buttonHandler = () => {

    setShow(!show);
  }
  return (
    <Routes>
      <Route path='/' element={<StudentHome/>}/>
      <Route path='/student-detail' element={<StudentDetail/>}/>

        

    </Routes>
  );
}

export default App;
