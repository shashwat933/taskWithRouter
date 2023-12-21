import { Route, Routes } from 'react-router-dom';
import './App.css';
import StudentDetail from './StudentDetail';

import StudentHome from './StudentHome';
function App() {
 
  return (
    <Routes>
      <Route path='/' element={<StudentHome/>}/>
      <Route path='/student-detail' element={<StudentDetail/>}/>

        

    </Routes>
  );
}

export default App;
