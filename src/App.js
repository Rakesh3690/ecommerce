import './App.css';
import Contact from './components/Contact';
import Nav from './components/Nav';
import { Route,Routes } from 'react-router-dom';
import Filters from './components/Filters';
import Shoes from './components/Shoes';
import Cart from './components/Cart';
import Store from './pages/Store';
import ContactPage from './pages/ContactPage';
import DataItem from './pages/DataItem';
import Card from './components/Card';
import Cardsitems from './pages/Cardsitems';
import TeamDetails from './pages/TeamDetails';

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/store' element={<Store/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/team' element={<TeamDetails/>}/>
      </Routes>
      
      
    </div>
    
  );
}

export default App;
