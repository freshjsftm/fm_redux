import {Suspense, lazy} from 'react';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';

const UserPage = lazy(() => import('./pages/userPage'));
const TodoPage = lazy(() => import('./pages/todoPage'));
const CounterPage = lazy(() => import('./pages/counterPage'));

function App(props) {
  return (
    <BrowserRouter>
    
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink> 
        </li>
        <li>
          <NavLink to="/todo">todo</NavLink>
        </li>
        <li>
          <NavLink to="/counter">counter</NavLink>
        </li>
      </ul>
    </nav>
    <Suspense fallback={'Loading...'} >
      <Routes>
        <Route path="/" element={<UserPage />}/>
        <Route path="/todo" element={<TodoPage />}/>
        <Route path="/counter" element={<CounterPage />}/>
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
