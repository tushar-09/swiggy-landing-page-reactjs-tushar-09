import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import FeatureName from './components/FeatureName';
import Pocket from './components/Pocket';
import Footer from './components/Footer';
import Head from './components/Head';
import './index.css';
function App() {
  return (
    < div className="main">
   <Head />
   <FeatureName />
   <Pocket />
   <Footer />
    </div>
  );
}

export default App;

