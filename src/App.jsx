import About from "./Component/About/About";
import Banner from "./Component/Banner/Banner";
import Branding from "./Component/Branding/Branding";
import Features from "./Component/Features/Features";
import Navbar from "./Component/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Branding/>
      <About/>
      <Features/>
    </div>
  );
};

export default App;