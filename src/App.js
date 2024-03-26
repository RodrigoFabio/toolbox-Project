import Home from './pages/Home/index.js';
import Error from './pages/Error'
import {createBrowserRouter} from 'react-router-dom'
const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },{
    path:'*',
    element: <Error/>
  }
  ])

 export {router};





