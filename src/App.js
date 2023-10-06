import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Testomonial from "./components/Testomonial";
import Poster from "./components/Poster";
import Category from "./components/Category";
import Client from "./components/Client";

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <Banner />
        <Testomonial/>
        <Poster/>
        <Category/>
        <Client/>
        <Footer />
        <div className="app_body"></div>
      </div>
    </>
  );
}

export default App;
