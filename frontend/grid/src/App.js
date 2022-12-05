import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Homepage from './pages/Homepage';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
       <Router>
       <Routes>
            <Route path='/' element={<Homepage/>}/>
            {/* <Route pat  h='/chat' element={<Chatpage/>} /> */}
          </Routes>
       </Router>
    </>
  );
}

export default App;
