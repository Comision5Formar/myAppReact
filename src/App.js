import './App.css';
import Footer from './components/Footer';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';

function App() {
 
  return (
    <div id="wrapper">
     <Sidebar/>
     <div id="content-wrapper" className="d-flex flex-column">
       <Main/>
       <Footer/>
     </div>
    </div>
  );
}

export default App;
