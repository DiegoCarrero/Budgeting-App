import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Index from './pages/Index';
import Show from './pages/Show';
import New from './pages/New';
import Edit from './pages/Edit';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';

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


// import { Link } from "react-router-dom"


// export default function NavBar() {
//     return (
//         <div className="NavBar">
//             <Link to='/transactions'>
//                 <h1>Budgeting App</h1>
//             </Link>
//             <Link to='/transactions/new'>
//                 <button>New Transaction</button>
//             </Link>
//         </div>
//     )
// }