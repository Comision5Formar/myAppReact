import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
 
  return (
    <div id="wrapper">
     <Sidebar/>
     <div id="content-wrapper" className="d-flex flex-column">
       <Main/>
     </div>
    </div>
  );
}

export default App;
