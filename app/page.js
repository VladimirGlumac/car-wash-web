import Contact from "./components/Contact";
import Main from "./components/Main";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import ServicesInfo from "./components/ServicesInfo";
import ServicesTypes from "./components/ServicesTypes";
import WhyUs from "./components/WhyUs";
import Workers from "./components/Workers";

export default function Home() {
  return (
    <main>
      <Main />
      <WhyUs />
      <Services />
      <ServicesInfo />
      <ServicesTypes />
      <Workers />
      <Reviews />
      <Contact />
    </main>
  );
}
