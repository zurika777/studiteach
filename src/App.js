import './css/app.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {routes} from './global/configs/routes';
import {Header, Footer} from './pages';


function App() {

  return (
      <div className="container">
    <BrowserRouter>
       <Header />
            <Routes>
              {routes.map((route, index) =>(
                  <Route key={`routes-path-${index}`} path={route.path} element={route.element} />
              ))}
            </Routes>
       <Footer />
    </BrowserRouter>
      </div>
    )
}

 export default App;


// TODO  import {Home} from './pages'; როდესაც pages -ში ვქმნით index.js
//  და შიგვინთ ვაკეთებთ ესპორტს  export {Home} from './Home';
//  მაშინ აღარ არის საჭირო მზგავსი რამის გაწერა import {Home} from './home/Home';
//  საკმარისია import {Home} from './pages'; და ამოიღებს თვითონ



// TODO კომპონენტი რეაქტში იწერება დიდი ასოთი


// TODO const TestComponent = () => {}
//  export default TestComponent იგივეა
// TODO <BrowserRouter> сохраняет текущее местоположение в адресной строке браузера, используя чистые URL-адреса, и выполняет навигацию, используя встроенный стек истории браузера.

// TODO react არის single site aplication
// TODO Route ლინკი და Routes ლინკები


// TODO flex-wrap: wrap;    ვაძლევთ უფლებას გადავიდეს შემდეგ სტროფზე

// todo
//  list-style-type: none;  რომ გააქროს <li> - ს წერტილები*/

