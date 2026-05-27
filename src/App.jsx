import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Product } from "./components/Product";
import Space from "./components/Space";
import GlobalStyle from "./components/style";
import Touch from "./components/Touch";
import Trust from "./components/Trust";
import Why from "./components/Why";

function App() {
  return (
    <>
      <GlobalStyle />
      <Space />
      <Navbar />
      <Hero />
      <About />
      <Product />
      <Why />
      <Trust />
      <Touch />
      <Footer />
    </>
  );
}

export default App;
