import Home from './Pages/home/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Pages/login/Login'
import List from './Pages/list/List'
import Single from './Pages/single/Single'
import New from './Pages/new/New'
import { userInputs } from './formSource';
import './style/dark.css'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path='/'>
         <Route index element={<Home/>}/>
         <Route path='login' element={<Login/>}/>
          </Route>
          <Route path='users'>
          <Route index element = {<List/>}/>
          <Route path=':userId' element={<Single/>}/>
          <Route path='new' element={<New inputs = {userInputs} title="Add New User "/>}/>
          </Route>

          {/* <Route path='products'>
          <Route index element = {<List/>}/>
          <Route path=':productId' element={<Single/>}/>
          <Route path='new' element={<New inputs = {productInputs} />}/>
          </Route> */}

      </Routes>
      </BrowserRouter>
      
      

    </div>
  );
}

export default App;
