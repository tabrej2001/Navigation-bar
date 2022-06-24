
import './App.css';
import Welcome from './Component/Welcome.js';
import Mydetails from './Component/mydetails.js';
import Mycompany from './Component/Menu';
function App() {


  const name={
    Cname:'Digital Solution',
    about:'About',
    register:'Register',
    login:'Login',
    careers:'careers'
  }

  return (
    <>
    <Mycompany name={name}/>
    </>
  );
}

export default App;
