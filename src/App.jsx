import About from "./Component/About/About";
import Banner from "./Component/Banner/Banner";
import Branding from "./Component/Branding/Branding";
import Navbar from "./Component/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Branding/>
      <About/>
    </div>
  );
};

export default App;