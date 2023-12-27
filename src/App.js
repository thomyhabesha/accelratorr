import Home from './pages/Home';
import {HashRouter, Routes,Route} from 'react-router-dom'
import Apply from './pages/apply/Apply';
import Info from './pages/information/Info';
import Terms from './pages/terms/Terms';
import Privacy from './pages/privacy/Privacy';
import './App.css';

function App() {
  return (
    <div className="App">
       <HashRouter>
<Routes>

<Route exact path="/" element={<Home/>}/>
    <Route path="/apply" element={<Apply/>}/>
    <Route path="/info" element={<Info/>}/>
    <Route path="/terms" element={<Terms/>}/>
    <Route path="/privacy" element={<Privacy/>}/>
         
</Routes>
</HashRouter>
     
    </div>
  );
}

export default App;
