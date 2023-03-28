import './App.css';
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <div className="App">
      <div>
        <CakeContainer/>
        <IceCreamContainer/>  
        <UserContainer/>
         
      </div>
    </div>
  );
}

export default App;
