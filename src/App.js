import{BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Index from './pages';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
         <Route index  exact Component={Index}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
