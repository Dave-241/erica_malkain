import Contact from "../components/general-component/contact";
import Footer from "../components/general-component/footer";
import Nav from "../components/general-component/nav";
import Publication_hero from "../components/publication/hero";
import Publication from "../components/publication/publication";
import Each_workshop from "../components/workshop/each_workshop";
import Workshop_hero from "../components/workshop/hero";

export default function Home() {
  return (
    <>
      <>
        <Nav />
        <Workshop_hero />
        <Each_workshop />
        <Contact />
        <Footer />
      </>
    </>
  );
}