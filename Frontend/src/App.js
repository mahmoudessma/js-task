
import './App.css';
import {BrowserRouter, createBrowserRouter, Navigate, Route, RouterProvider, Routes} from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import PracticeScreen from './Screens/PracticeScreen';
import RankScreen from './Screens/RankScreen';
import { CheckUserExist } from './hooks/helper';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  

    const router = createBrowserRouter([
      {
        path : '/',
        element :<HomeScreen/> 
      },
      {
        path : '/practice',
        element : <CheckUserExist><PracticeScreen/></CheckUserExist>
      },
      {
        path : '/rank',
        element : <CheckUserExist><RankScreen/></CheckUserExist>
      },
    ])
  return (
    <>
      <RouterProvider router={router} />
      <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>

    </>
    
  );
}

export default App;
