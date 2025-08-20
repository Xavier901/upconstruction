import{BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';

import Layout from './components/layout';
import Main from './pages/main';
import Footer from './components/Footer';


// import'../styles/css/main.css'
// import'../styles/js/main.js'

import'./styles/css/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Layout/>
        <Routes>
         <Route index  exact Component={Main}/>
        </Routes>
        <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
