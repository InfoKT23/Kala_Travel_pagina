import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Destinations from "../components/Destinations";
import Visas from "../components/Visas";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Destinations />
      <Visas />
      <Blog />
      <Footer />
    </>
  );
}