import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Index from './pages/Index';
import Show from './pages/Show';
import New from './pages/New';
import Edit from './pages/Edit';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/transactions' element={<Index />} />
        <Route path='/transactions/:id' element={<Show />} />
        <Route path='/transactions/new' element={<New />} />
        <Route path='/transactions/:id/edit' element={<Edit />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
