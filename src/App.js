import "./App.css";
import {
  About,
  Contact,
  Footer,
  Header,
  Me,
  Portfolio,
  Services,
} from "./components/index";

const App = () => {
  return (
    <div>
      <Header />
      <Me />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
