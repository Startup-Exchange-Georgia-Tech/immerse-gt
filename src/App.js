import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Hero2 from "./components/Hero2/Hero2";
import Footer from "./components/Footer/Footer";
import Tracks from "./components/Tracks/Tracks";
import Partners from "./components/Partners/Partners";
import RegisterNowBanner from "./components/RegisterNowBanner/RegisterNowBanner";

function App() {
  return (
    <>
      <Hero2></Hero2>
      <Tracks></Tracks>
      <RegisterNowBanner></RegisterNowBanner>
      <Partners></Partners>
      <Footer></Footer>
    </>
  );
}

export default App;
