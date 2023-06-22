import './css/App.css';


function ButtonCimponent(props) {
    const {name, cutomClassName} = props;
  return (
    <button className={cutomClassName}>{name}</button>
  )
}

function App() {

  return (
      <div className='wrapper'>
     <ButtonCimponent name='Me' cutomClassName ='red'/>
     <ButtonCimponent name='Zuka' cutomClassName ='black'/>
      </div>
  )
}

 export default App;


// TODO კომპონენტი რეაქტში იწერება დიდი ასოთი


// TODO const TestComponent = () => {}
//  export default TestComponent იგივეა


