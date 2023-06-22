import {BrowserRouter, Routes, Route} from "react-router-dom";
import './css/App.scss';
import {routes} from './global/configs/routes';
import { Header, Footer} from './pages';




function App() {
/*
    <ButtonCimponent name='Danela' cutomClassName ='red'/>
        <ButtonCimponent name='Zuka' cutomClassName ='black'/>
        */

  return (

    <BrowserRouter>
        <Header/>
        <Routes>

      {routes.map((route, index) =>(
          <Route
              key={`routes-path-${index}`}
              path={route.path}
              element={route.element}
          />
        ))}
       </Routes>
        <Footer/>
</BrowserRouter>
  )
}

 export default App;


// TODO კომპონენტი რეაქტში იწერება დიდი ასოთი


// TODO const TestComponent = () => {}
//  export default TestComponent იგივეა
// TODO react არის single site aplication


