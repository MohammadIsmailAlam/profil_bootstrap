import "./CSS/App.css"
import Topbar from "./pages/Topbar";
import Header from './pages/Header';
import Intro from "./pages/Intro";
import Portfolio from "./pages/Portfolio";
import Footer from './pages/Footer';
import Experience from "./pages/Experience";


function App() {
  return (
    <div className="App">
      <Topbar />
      <Header />
      <Intro />
      <Portfolio />
      <Experience/>
      <Footer />
    </div>
  );
}

export default App;
