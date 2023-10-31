import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FOOTER from './components/footer';
import HEADER from './components/header';
import CONTACT from './components/contact';
import REGISTERFORM from './components/Register-form';
import LOGINFORM from './components/login-form';
import BLOGSDETAILS from './components/blogsdetails';
import BLOGS from './components/blogs';
import HOMEPAGE from './components/homepage';
import Card from './components/card';
import UPLOADBLOG from "./components/uploadblog"
import ABOUTUS from './components/aboutus';
import CONTACTUS from './components/contact'
import './App.css';



function App() {
  return (
    <Router>
      <div className="App ">
        <HEADER/>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Card/>} />
            <Route path='/loginform' element={<LOGINFORM />} />
            <Route path='/uploadblog' element={<UPLOADBLOG/>} />
            <Route path='/registerform' element={<REGISTERFORM />} />
            <Route path='/blogs' element={<BLOGS />} />
            <Route path='/aboutus' element={<ABOUTUS />} />
            <Route path='/contactus' element={<CONTACTUS />} />
            <Route path='/blogsdetails/:id' element={<BLOGSDETAILS/>}/>
          </Routes>
        </div>
        <FOOTER />
      </div>
    </Router>
  );
}

export default App;