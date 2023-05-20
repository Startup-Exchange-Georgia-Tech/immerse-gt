import logo from "./logo.svg";
import "./App.css";
import Hero2 from "./components/Hero2/Hero2";
import Footer from "./components/Footer/Footer";
import Tracks2 from "./components/Tracks2/tracks2";
import Judges from "./components/Judges/Judges";
import Workshops from "./components/Workshops/Workshops";
import RegisterNowBanner from "./components/RegisterNowBanner/RegisterNowBanner";
import JoinImmersion from "./components/JoinImmersion/JoinImmersion";

function App() {
  return (
    <>
      <Hero2></Hero2>
      <Tracks2></Tracks2>
      <RegisterNowBanner></RegisterNowBanner>
      <Judges></Judges>
      <Workshops></Workshops>
      <JoinImmersion></JoinImmersion>
      <Footer></Footer>
    </>
  );
}

export default App;
