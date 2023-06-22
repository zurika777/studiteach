import './css/App.css';
import { Header, Footer} from './pages';


function ButtonCimponent(props) {
    const {name, cutomClassName} = props;
  return (
    <button className={cutomClassName}>{name}</button>
  )
}

function App() {

  return (
      <>

          <Header/>
     <ButtonCimponent name='Danela' cutomClassName ='red'/>
     <ButtonCimponent name='Zuka' cutomClassName ='black'/>
          <Footer/>
      </>
  )
}

 export default App;


// TODO კომპონენტი რეაქტში იწერება დიდი ასოთი


// TODO const TestComponent = () => {}
//  export default TestComponent იგივეა


