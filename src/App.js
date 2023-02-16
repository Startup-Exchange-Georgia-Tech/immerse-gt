import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Hero2 from "./components/Hero2/Hero2";
import Footer from "./components/Footer/Footer";
import Tracks from "./components/Tracks/Tracks";
import Tracks2 from "./components/Tracks2/tracks2";
import Partners from "./components/Partners/Partners";
import RegisterNowBanner from "./components/RegisterNowBanner/RegisterNowBanner";
import JoinImmersion from "./components/JoinImmersion/JoinImmersion";

function App() {
  return (
    <>
      <Hero2></Hero2>
      <Tracks2></Tracks2>
      <RegisterNowBanner></RegisterNowBanner>
      <Partners></Partners>
      <JoinImmersion></JoinImmersion>
      <Footer></Footer>
    </>
  );
}

export default App;
