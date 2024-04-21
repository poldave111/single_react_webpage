import './App.css';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Splash from './components/Splash/Splash';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Splash />
      <Services />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
